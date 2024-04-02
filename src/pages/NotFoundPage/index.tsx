export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-[1536px] p-[56px] h-[calc(100dvh-80px-104px)] mobile:p-[60px_16px]">
      <div className="flex flex-col items-center">
        <img
          className="w-[680px] aspect-auto"
          src="/images/404.png"
          alt="Page not found"
        />
        <h1 className="text-[36px] font-semibold mt-[24px]">Page not found</h1>
        <p>Sorry, We can’t find the page you’re looking for</p>
      </div>
    </div>
  );
}
