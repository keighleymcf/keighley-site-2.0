import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import emailjs from "@emailjs/browser";
import { ContactForm } from "@/components/ContactForm";
import contactContent from "@/content/contact.json";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

const { form: f } = contactContent;

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

async function fillAndSubmitForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText(f.namePlaceholder), "Keighley");
  await user.type(
    screen.getByPlaceholderText(f.emailPlaceholder),
    "test@example.com",
  );
  await user.type(
    screen.getByPlaceholderText(f.messagePlaceholder),
    "Hello there this is a message",
  );
  await user.click(screen.getByRole("button", { name: f.submitLabel }));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.mocked(emailjs.send).mockReset();
  });

  it("renders all form fields using content placeholders", () => {
    renderWithRouter(<ContactForm />);
    expect(screen.getByPlaceholderText(f.namePlaceholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(f.emailPlaceholder)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(f.messagePlaceholder),
    ).toBeInTheDocument();
  });

  it("shows name validation error when submitted empty", async () => {
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await user.click(screen.getByRole("button", { name: f.submitLabel }));
    await waitFor(() => {
      expect(
        screen.getByText("Name must be at least 2 characters"),
      ).toBeInTheDocument();
    });
  });

  it("shows email validation error for invalid email", async () => {
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await user.type(screen.getByPlaceholderText(f.namePlaceholder), "Keighley");
    await user.type(
      screen.getByPlaceholderText(f.emailPlaceholder),
      "notanemail",
    );
    await user.type(
      screen.getByPlaceholderText(f.messagePlaceholder),
      "Hello there this is a message",
    );
    await user.click(screen.getByRole("button", { name: f.submitLabel }));
    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address"),
      ).toBeInTheDocument();
    });
  });

  it("calls emailjs.send with correct params on valid submission", async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: "OK" });
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await fillAndSubmitForm(user);
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: "Keighley", email: "test@example.com", message: "Hello there this is a message" },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
    });
  });

  it("shows success message after valid submission", async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: "OK" });
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await fillAndSubmitForm(user);
    await waitFor(() => {
      expect(screen.getByText(f.successMessage)).toBeInTheDocument();
    });
  });

  it("shows error message when emailjs.send fails", async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error("Network error"));
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await fillAndSubmitForm(user);
    await waitFor(() => {
      expect(screen.getByText(f.errorMessage)).toBeInTheDocument();
    });
  });

  it("shows loading state while sending", async () => {
    let resolveSend!: (value: { status: number; text: string }) => void;
    vi.mocked(emailjs.send).mockImplementationOnce(
      () => new Promise((resolve) => { resolveSend = resolve; }),
    );
    const user = userEvent.setup();
    renderWithRouter(<ContactForm />);
    await fillAndSubmitForm(user);
    await waitFor(() => {
      expect(screen.getByRole("button", { name: f.sendingLabel })).toBeDisabled();
    });
    resolveSend({ status: 200, text: "OK" });
    await waitFor(() => {
      expect(screen.getByText(f.successMessage)).toBeInTheDocument();
    });
  });

  it("renders the privacy disclaimer with a link", () => {
    renderWithRouter(<ContactForm />);
    expect(
      screen.getByRole("link", { name: f.privacyLinkLabel }),
    ).toBeInTheDocument();
  });
});
