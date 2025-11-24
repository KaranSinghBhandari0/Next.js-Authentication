export const dynamic = "force-dynamic";
import ProfileForm from "./ProfileForm";
import { getCurrentUser } from "@/lib/auth";

export default async function Profile() {
  const user = await getCurrentUser();

  return (
    <ProfileForm user={user} />  
  );
}