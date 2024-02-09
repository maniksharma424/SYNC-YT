import type { Metadata } from "next";

import { redirect } from "next/navigation";
import { getServerSignedInUser } from "@/libraries/supabase/auth";

export const metadata: Metadata = {
  title: "iterbook",
  description: "Your trips management at scale with iterbook",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getServerSignedInUser()
  if (data.session) {
    redirect("/dashboard")
  }
  return <div className="">{children}</div>;
}
