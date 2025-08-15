"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p className="text-2xl font-bold">apps / Web</p>
      <Button onClick={() => addUser()}>Add</Button>
      <div className="max-w-sm mx-auto w-full">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
