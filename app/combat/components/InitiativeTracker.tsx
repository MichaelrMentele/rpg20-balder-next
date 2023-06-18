"use client"

import Card from "@/app/components/Card"
import Image from "next/image"

function InitiativePortrait({ name, className = "" }) {
  return (
    <Card className="py-1 px-2 m-1">
      <div className="flex justify-between p-1">
        <p className="text-xs">{name}</p>
      </div>
      <div className={`drop-shadow-sm cursor-pointer`}>
        <Image
          src="https://picsum.photos/400/600"
          height={100}
          width={100}
          alt={name}
        />
        <div className="flex justify-between p-1">
          <p className="text-xs">19 hp</p>
          <p className="text-xs">19 AC</p>
        </div>
      </div>
    </Card>
  )
}

export default function InitiativeTracker({ combatants = [] }) {
  return (
    <div>
      <div className="flex flex-row overflow-x-scroll pb-4">
        {combatants.map((combatant) => (
          <InitiativePortrait key={combatant.id} name={combatant.name} />
        ))}
      </div>
    </div>
  )
}
