"use client"

import { MDXProvider } from "@mdx-js/react"

export default function TutorialLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  // TODO: add header and footer
  return (
    <MDXProvider>
      <article className="prose lg:prose-xl">{children}</article>
    </MDXProvider>
  )
}
