import { Card, CardContent, CardHeader } from "@/components/ui/card"

/**
 * A feed of all the actions that have happened in the combat.
 */
export default function ActionFeed({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <Card className={`${className}`} style={style}>
      <CardHeader>Actions</CardHeader>
      <CardContent>
        <p>Actions will go here.</p>
      </CardContent>
    </Card>
  )
}
