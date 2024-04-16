export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <aside className="sidebar"></aside>
        {children}
    </>
  );
}
