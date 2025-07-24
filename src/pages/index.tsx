'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [answer, setAnswer] = useState('#FFFFFF');

  const randomColor = (): string => {
    let color = '#000000';

    return color;
  }

  useEffect(() => {
    const color = randomColor();
    setAnswer(color);

  }, []);

  return (
    <section className="guess-color">
      <div className="answer" style={{ background: answer }}></div>
    </section>
  );
}
