export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:p-5 ">
      <div className="inline-block  w-full min-h-max text-center justify-center">
        {children}
      </div>
    </section>
  );
}
