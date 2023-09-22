import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
export default DashboardPage;