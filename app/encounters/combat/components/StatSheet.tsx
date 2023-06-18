import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function StatSheet({ character, className, style }) {
  const { name, stats, abilityScores } = character
  return (
    <Card className={`${className}`}>
      <CardHeader>{name}</CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}
