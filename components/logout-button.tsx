"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export async function performLogout(router: ReturnType<typeof useRouter>) {
  const supabase = createClient();
  await supabase.auth.signOut();
  router.push("/auth/login");
  router.refresh();
}

export function LogoutButton() {
  const router = useRouter();

  return <Button onClick={() => performLogout(router)}>Logout</Button>;
}
