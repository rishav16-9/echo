"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {  useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p className="text-2xl font-bold">apps / Web</p>
      <OrganizationSwitcher hidePersonal />
      <UserButton />
      <Button onClick={() => addUser()}>Add</Button>
      <div className="max-w-sm mx-auto w-full">
      </div>
    </div>
  );
}
