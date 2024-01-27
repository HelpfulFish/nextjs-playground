import { Suspense } from "react";
import AccountLoginCard from "../login-card";

const Login = async () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main className="flex min-h-screen flex-col items-center p-24 gap-10">
        <AccountLoginCard />
      </main>
    </Suspense>
  );
};
export default Login;
