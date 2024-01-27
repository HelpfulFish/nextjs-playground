import { Suspense } from "react";
import AccountCard from "./account-card";
import { generateUser } from "@/lib/account-service";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InitialSetup = async () => {
  const account = await generateUser();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main className="flex min-h-screen flex-col items-center p-24 gap-10">
        <AccountCard {...account} />
        <Button variant="link" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </main>
    </Suspense>
  );
};

export default InitialSetup;
