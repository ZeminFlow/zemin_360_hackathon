interface PageHeadingProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
    </header>
  )
}
