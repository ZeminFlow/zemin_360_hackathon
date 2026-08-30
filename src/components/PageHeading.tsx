interface PageHeadingProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="grid gap-5 lg:grid-cols-12 lg:items-end">
      {eyebrow && (
        <div className="lg:col-span-3">
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-brand-300">
            <span className="h-px w-7 bg-brand-400/70" />
            {eyebrow}
          </p>
        </div>
      )}
      <div className={eyebrow ? 'lg:col-span-9' : 'lg:col-span-12'}>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-paper sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
    </header>
  )
}
