import Link from "next/link"
import { getTutorials } from "./tutorials"

/**
 * The landing page for the tutorial.
 *
 * Contains a list of tutorial pages.
 */
export default async function TutorialPage() {
  return (
    <div>
      <h1>Tutorial</h1>
      <ol>
        <li>
          <Link href="/tutorial/why-balder">Why Balder?</Link>
        </li>
      </ol>
    </div>
  )
}
