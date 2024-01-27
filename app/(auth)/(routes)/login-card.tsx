"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { User, getUserById } from "@/lib/account-service";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  accountId: z.string().min(2).max(100),
});

const AccountLoginCard = () => {
  const [userAccount, setUserAccount] = useState<User | null>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // const mockUserId = "4ea30397-27d3-4d2f-8e34-689d5c9d1029"; // valid
    // const mockUserId = "4ea30397-27d3-4d2f-8e34-689d5c9d1020"; // invalid

    try {
      const payload = { id: values.accountId };
      const response = await axios.post("/api/user/login", payload);
      setUserAccount(response.data as User);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="max-w-md gap-4">
          <CardHeader className="text-3xl font-bold text-center">
            Login
          </CardHeader>
          <CardDescription className="px-4 mb-4">
            Your randomly generated account. Make sure you copy and save account
            ID. This will be your login for this account.
          </CardDescription>
          <CardContent className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="accountId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="00000000-0000-0000-0000-000000000000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </form>

      <code>{JSON.stringify(userAccount)}</code>
    </FormProvider>
  );
};

export default AccountLoginCard;
