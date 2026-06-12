import { loginAction } from "@/lib/actions/auth";

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-blue p-5">
      <form action={loginAction} className="w-full max-w-sm rounded-[20px] border border-primary-blue/10 bg-white p-6 shadow-[0_24px_70px_rgba(4,18,63,0.08)]">
        <h1 className="text-2xl font-semibold text-deep-navy">Login</h1>
        {params.error && <p className="mt-3 text-sm text-primary-blue">Please check your email and password.</p>}
        <label className="mt-6 grid gap-2 text-sm font-medium text-deep-navy">
          Email
          <input name="email" type="email" required className="rounded-2xl border border-primary-blue/15 px-4 py-3" />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
          Password
          <input name="password" type="password" required className="rounded-2xl border border-primary-blue/15 px-4 py-3" />
        </label>
        <button className="mt-6 w-full rounded-full bg-deep-navy px-5 py-3 font-semibold text-white hover:bg-primary-blue">
          Login
        </button>
      </form>
    </main>
  );
}
