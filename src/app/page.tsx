"use client";
import Habit from "./Components/Habit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Habit habit="Drink water" />
    </main>
  );
}
