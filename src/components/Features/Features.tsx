import { FeatureCard } from '../FeatureCard/FeatureCard'
import type { Feature } from '../../types'

const features: Feature[] = [
  {
    number: '01',
    title: 'Made for the open road',
    description:
      'Find a starting point for your next trip, whether you have a destination in mind or just want to explore.',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Simple by design',
    description:
      'No clutter, no complicated planning tools. Just a straightforward way to start figuring out where to go.',
    icon: '◎',
  },
  {
    number: '03',
    title: 'Built together',
    description:
      'Route Free Finder is an open project. Ideas, feedback, and a little help from the community go a long way.',
    icon: '✳',
  },
];

export const Features = () => {
  return <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
}