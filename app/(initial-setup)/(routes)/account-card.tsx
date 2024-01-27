"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { User } from "@/lib/account-service";
import { useToast } from "@/components/ui/use-toast";

const AccountCard = (user?: User) => {
  const { toast } = useToast();
  const copyAccountId = () => {
    navigator.clipboard.writeText(user?.id ?? "");
    toast({
      title: "Account ID Copied",
    });
  };

  return (
    <Card className="max-w-md gap-4">
      <CardHeader className="text-3xl font-bold text-center">
        Account
      </CardHeader>
      <CardDescription className="px-4 mb-4">
        Your randomly generated account. Make sure you copy and save account ID.
        This will be your login for this account.
      </CardDescription>
      <CardContent className="flex flex-col gap-4">
        <Label htmlFor="accountId">Account ID</Label>
        <Input
          type="text"
          id="accountId"
          placeholder="00000000-0000-0000-0000-000000000000"
          readOnly
          value={user?.id}
        />
      </CardContent>
      <CardFooter>
        <Button onClick={copyAccountId} className="w-full">
          Copy Account ID
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
