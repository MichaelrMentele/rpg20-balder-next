"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

function InitiativePortrait({ name, className = "" }) {
  return (
    <Card className="m-1 px-0 py-0 resize-none">
      <div className="p-1">
        <p className="text-xs">{name}</p>
      </div>
      <div className={`cursor-pointer w-[80px]`}>
        <Image
          src="https://picsum.photos/480/600"
          height={80}
          width={80}
          alt={name}
        />
        <div className="flex justify-between p-1">
          <p className="sm:w-400 text-xs">19 HP</p>
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
        <p className="text-4xl my-auto">1</p>
        {combatants.map((combatant) => (
          <InitiativePortrait key={combatant.id} name={combatant.name} />
        ))}
        <p className="text-4xl my-auto">2</p>
        {combatants.map((combatant) => (
          <InitiativePortrait key={combatant.id} name={combatant.name} />
        ))}
      </div>
    </div>
  )
}
