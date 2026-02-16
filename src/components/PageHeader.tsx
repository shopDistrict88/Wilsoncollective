import FadeIn from './FadeIn'

interface PageHeaderProps {
  label?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="page-container">
        {label && (
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-sans font-medium mb-6">
              {label}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-stone-400 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={0.3}>
          <div className="divider" />
        </FadeIn>
      </div>
    </section>
  )
}
