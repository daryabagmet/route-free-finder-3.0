import { FeatureCard } from '../FeatureCard/FeatureCard'
import type { Feature } from '../../types'

const features: Feature[] = [
  {
    title: 'Made for the open road',
    description:
      'Find a starting point for your next trip, whether you have a destination in mind or just want to explore.',
    icon: '↗',
  },
  {
    title: 'Simple by design',
    description:
      'No clutter, no complicated planning tools. Just a straightforward way to start figuring out where to go.',
    icon: '◎',
  },
  {
    title: 'Built together',
    description:
      'Route Free Finder is an open project. Ideas, feedback, and a little help from the community go a long way.',
    icon: '✳',
  },
]

export const Features = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1 max-[760px]:gap-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  )
}
