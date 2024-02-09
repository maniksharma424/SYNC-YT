import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { RedirectType, redirect } from "next/navigation";
import { getServerSignedInUser, signOut } from "@/libraries/supabase/auth";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iterbook",
  description: "Your trips management at scale with iterbook",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getServerSignedInUser();
  if (!data.session) {
    redirect("/login");
  }
  return (
    <div className="flex w-full h-screen flex-col">
      <div className="flex-grow flex-1">
        {children}
        <Header></Header>
      </div>
    </div>
  );
}
