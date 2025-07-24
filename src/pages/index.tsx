'use client';

import { shuffle } from 'lodash';
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
  const [answer, setAnswer] = useState<string>('#FFFFFF');
  const [answerList, setAnswerList] = useState<Array<string>>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const randomColor = (): string => {
    let color = '#';

    const letters = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  const handleAnswerClick = (color: string): void => {
    if (answer === color) {
      setIsCorrect(true);
      generateNextQuestion();
    } else {
      setIsCorrect(false);
    }
  }

  const generateNextQuestion = (): void => {
    const color = randomColor();
    setAnswer(color);
    const list = [color, randomColor(), randomColor()];
    setAnswerList(shuffle(list));
  }

  useEffect(() => {
    generateNextQuestion();
  }, []);

  return (
    <section className="guess-color">
      <div className="answer" style={{ background: answer }}></div>

      <ul className="answer-list">
        {
          answerList.map((ans) => {
            return (
              <li className="answer-item" key={ans} onClick={() => handleAnswerClick(ans)}>
                {ans}
              </li>
            )
          })
        }
      </ul>

      <div className="right-wrong">
        {isCorrect != null && (
          <span>{isCorrect ? 'Correct!' : 'Wrong Answer!'}</span>
        )}
      </div>

    </section>
  );
}
