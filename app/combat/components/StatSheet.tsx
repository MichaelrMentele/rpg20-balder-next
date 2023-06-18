import Card from "@/app/components/Card"

export default function StatSheet({
  name,
  stats,
  abilityScores,
  className,
  style,
}) {
  return (
    <Card className={`${className}`}>
      <h1>{name}</h1>
      <p>
        <b>AC:</b> {stats?.ac}
        <b>HP:</b> {stats?.hp}
      </p>
      <ol>
        {abilityScores?.map((abilityScore) => (
          <li key={abilityScore.name}>
            <b>{abilityScore.name}:</b> {abilityScore.value}
          </li>
        ))}
      </ol>
    </Card>
  )
}
