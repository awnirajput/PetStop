import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { PetProfileGrid } from "@/components/pets/pet-profile-grid"
import { AddPetDialog } from "@/components/pets/add-pet-dialog"

export default function PetsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground">My Pets</h1>
            <p className="text-muted-foreground mt-1">Manage your pet profiles and health records</p>
          </div>
          <AddPetDialog />
        </div>

        <PetProfileGrid />
      </div>
    </DashboardLayout>
  )
}
