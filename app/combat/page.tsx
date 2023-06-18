import ActionFeed from "./components/ActionFeed"
import InitiativeTracker from "./components/InitiativeTracker"
import StatSheet from "./components/StatSheet"

export default function CombatPage() {
  const combatants = [
    { id: 1, name: "Goblin", initiative: 10 },
    { id: 2, name: "Orc", initiative: 15 },
    { id: 3, name: "Troll", initiative: 5 },
    { id: 4, name: "P1", initiative: 20 },
    { id: 5, name: "P2", initiative: 25 },
    { id: 6, name: "P3", initiative: 30 },
    { id: 7, name: "P4", initiative: 35 },
  ]

  return (
    <>
      <InitiativeTracker combatants={combatants} />
      <div className="gap-4 grid grid-cols-12">
        <ActionFeed className="col-span-4" />
        <StatSheet character={combatants[0]} className="col-span-8 w-full" />
      </div>
    </>
  )
}
