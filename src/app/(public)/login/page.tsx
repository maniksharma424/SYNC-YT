"use client"
import { signUpWithGoogle } from "@/libraries/supabase/auth";
import React from "react";

const Page = () => {
  return (
    <div>
      <button
        onClick={() =>
          signUpWithGoogle().then((res) => (window.location.href = res.url))
        }
      >
        Sign in with google{" "}
      </button>
    </div>
  );
};

export default Page;
