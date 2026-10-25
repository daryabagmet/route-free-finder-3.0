import type { Feature } from '../../types'


export const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <article className="feature-card">
      <div className="feature-card-top">
        <span className="feature-number">{feature.number}</span>
        <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      <span className="feature-rule" />
    </article>
  )
}