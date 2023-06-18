import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// function AddParticipantDialog() {
//   return (

//   )
// }

export default function EncounterDetailPage() {
  return (
    <div className="container grid gap-4 px-0">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>Some Stuff</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className=" flex justify-between">
            Participants
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>New Participant</DialogTitle>
                  <DialogDescription>
                    Select a monster form the dropdown. Support for linking to
                    your party coming soon!
                  </DialogDescription>
                </DialogHeader>
                <Combobox />
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Card>Test</Card>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Enemies</CardTitle>
        </CardHeader>
        <CardContent>Some Stuff</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Allies</CardTitle>
        </CardHeader>
        <CardContent>Some Stuff</CardContent>
      </Card>
    </div>
  )
}
