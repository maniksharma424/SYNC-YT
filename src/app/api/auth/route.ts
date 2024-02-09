import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { exchangeAuthCode } from "@/libraries/supabase/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  
  const REDIDIRECT_BASE_URL = "http://localhost:3000";
  if (code) {
    const { data, error } = await exchangeAuthCode(code);
    if (!error) {
      //check if host already exist

      return NextResponse.redirect(`${REDIDIRECT_BASE_URL}/dashboard`);
    }
  }

  // return the user to an error page with instructions
}
