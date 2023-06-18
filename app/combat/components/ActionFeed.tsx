import Card from "@/app/components/Card"

export default function ActionFeed({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <Card className={`${className}`} style={style}>
      <p>hello feed</p>
    </Card>
  )
}
