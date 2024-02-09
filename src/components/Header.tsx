"use client";
import { signOut } from "@/libraries/supabase/auth";
import React from "react";

const Header = () => {
  return (
    <div className=" w-full h-10">
      {" "}
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Header;
