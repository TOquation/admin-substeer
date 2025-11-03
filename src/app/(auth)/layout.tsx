export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('/images/login-bg.svg')] bg-center bg-cover min-h-screen">
      {children}
    </div>
  );
}
