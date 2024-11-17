import React from "react";
import { Skeleton } from "./ui/skeleton";

const LoadingScreen = () => {
  return (
    <div className="container h-screen mx-auto p-6">
      <div className="grid grid-cols-1 h-full md:grid-cols-3 gap-6">
        <aside className="hidden sm:flex md:col-span-1 h-full flex-col justify-between">
          <Skeleton className="h-[50%] w-full" />
          <Skeleton className="h-[5%] w-full" />
          <Skeleton className="h-[35%] w-full" />
        </aside>
        <main className="md:col-span-2 flex flex-col justify-between">
          <Skeleton className="h-[20%] w-full" />
          <Skeleton className="h-[5%] w-full" />
          <Skeleton className="h-[25%] w-full" />
          <Skeleton className="h-[5%] w-full" />
          <Skeleton className="h-[30%] w-full" />
        </main>
      </div>
    </div>
  );
};

export default LoadingScreen;
