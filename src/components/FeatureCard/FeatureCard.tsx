import type { Feature } from '../../types'

export const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <article className="flex flex-col rounded-sm border border-[#d7e1ec] bg-white/40 p-5">
      <h3 className="mb-2 font-display text-lg font-medium tracking-tight flex items-center gap-2">
        {feature.title}
        <span
          className="grid size-8 place-items-center rounded-full bg-[#dcecff] text-[17px] text-[#17549a]"
          aria-hidden="true"
        >
          {feature.icon}
        </span>
      </h3>
      <p className="m-0 max-w-75 text-sm leading-[1.75] text-[#53677d]">
        {feature.description}
      </p>
      <span className="mt-auto w-7 border-b-2 border-[#8ebce9] pt-4" />
    </article>
  )
}
