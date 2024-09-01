import InitialModal from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile"
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function SetupPage() {
const profile = await initialProfile();

if(!profile) {
    return (
        // <RedirectToSignIn />
        redirect('/sign-in')
    )
}

const server = await db.server.findFirst({
    where: {
        members: {
            some: {
                profileId: profile?.id
            }
        }
    }
})

if(server) {
    return redirect(`/servers/${server.id}`)
}


  return (
    <InitialModal/>
  )
}

export default SetupPage