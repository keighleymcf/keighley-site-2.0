import { cn } from '@/lib/utils'

export function StatCard({ number, label, colorClass }: { number: string; label: string; colorClass: string }) {
  return (
    <div className="bg-offwhite rounded-2xl p-8 text-center transition-all duration-300 border border-transparent hover:border-black hover:-translate-y-1">
      <div className={cn('font-hero text-4xl leading-none mb-2', colorClass)}>{number}</div>
      <div className="text-xs uppercase tracking-widest text-gray">{label}</div>
    </div>
  )
}
