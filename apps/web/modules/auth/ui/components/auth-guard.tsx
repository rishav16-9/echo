"use client";
import { SigninView } from "../views/sign-in-view";
import { AuthLayout } from "../layouts/auth-layout";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";


export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>Loading ...</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>
        <AuthLayout>{children}</AuthLayout>
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SigninView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
