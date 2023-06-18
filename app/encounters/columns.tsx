"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Encounter = {
  id: string
  name: string
  participants: string[]
}

export const columns: ColumnDef<Encounter>[] = [
  {
    accessorKey: "name",
    header: () => <div>Name</div>,
    cell: ({ row }) => {
      return <Link href={`/encounters/${row.original.id}`}>{row.name}</Link>
    },
  },
  {
    accessorKey: "participants",
    header: () => <div>Participants</div>,
    cell: ({ row }) => {
      return <div>Particpants</div>
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      // TODO: how to add onclick event to button?
      <div className="text-right">
        <Button>Add</Button>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <Button variant="ghost">Start</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
