import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Frown } from "lucide-react";
import { InternalLink } from "@/components/Links";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import contactContent from "@/content/contact.json";
import { ROUTES } from "@/routes/routes";
import { Body, Small } from "@/components/Typography";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const { form: f } = contactContent;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(false);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate // lets zod own all validation instead of the browser
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-widest text-gray">
                Name
              </FormLabel>
              <FormControl>
                <Input placeholder={f.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-widest text-gray">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={f.emailPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-widest text-gray">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={f.messagePlaceholder}
                  className="min-h-[120px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitted ? (
          <Body className="text-green font-medium py-2">
            {f.successMessage}
          </Body>
        ) : (
          <Button
            type="submit"
            disabled={loading}
            className="bg-black text-white hover:bg-coral transition-colors w-full mt-2 text-base h-11"
          >
            {loading ? f.sendingLabel : f.submitLabel}
          </Button>
        )}

        {error && (
          <div role="alert" className="py-2">
            <Body className="text-red-500 font-medium flex items-center gap-2">
              <Frown className="size-4 shrink-0" />
              {f.errorMessage}
            </Body>
          </div>
        )}

        <Small className="leading-relaxed mt-1">
          {f.privacyDisclaimer}{" "}
          <InternalLink to={ROUTES.PRIVACY} className="inline py-0 gap-0">
            {f.privacyLinkLabel}
          </InternalLink>
          .
        </Small>
      </form>
    </Form>
  );
}
