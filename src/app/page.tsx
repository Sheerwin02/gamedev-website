"use client";
import Recruitments from "./recruitment/recruitmentList";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center p-24">
      <Recruitments />
    </main>
  );
}
