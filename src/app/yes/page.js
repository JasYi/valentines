"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // Random position from 0% to 100% left
      };
      setHearts((prevHearts) => [...prevHearts, newHeart]);

      // Remove hearts after 5 seconds to avoid memory buildup
      setTimeout(() => {
        setHearts((prevHearts) =>
          prevHearts.filter((heart) => heart.id !== newHeart.id)
        );
      }, 15000);
    }, 500); // Add a new heart every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden">
      {/* Falling hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500 text-3xl animate-fall"
          style={{ left: `${heart.left}%`, top: "-50px" }}>
          ❤️
        </div>
      ))}

      {/* Main content */}
      <img src="cat-kiss.gif" alt="cat" />
      <h1 className="text-4xl font-bold font-varelaRound text-red-600 mb-6">
        YAY! I love you so much Cat!!!!
      </h1>
      <h1 className="text-4xl font-bold font-varelaRound text-red-600 mb-6">
        See you (virtually) on Valentine's Day!
      </h1>

      {/* Tailwind animation for hearts */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
