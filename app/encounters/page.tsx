import { Encounter, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

async function getData(): Promise<Encounter[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Final Battle - Ozymanthus",
    },
  ]
}

export default async function EncountersPage() {
  const data = await getData()

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
