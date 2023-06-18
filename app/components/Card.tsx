export default function Card({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-white dark:bg-slate-800 px-4 py-5 shadow sm:p-6`}
      style={style}
    >
      {children}
    </div>
  )
}
