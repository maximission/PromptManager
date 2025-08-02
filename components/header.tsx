import Link from "next/link";
import React from "react";
import { AuthButton } from "./auth-button";

function header() {
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8">
      <Link href="/">
        <h1>Prompt Manager</h1>
      </Link>
      <div className="flex gap-4">
        <AuthButton />
      </div>
    </header>
  );
}

export default header;
