"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Vara from "vara";

export default function Home() {
  const router = useRouter();
  const [firstLoad, setFirstLoad] = useState(true);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "60%",
    left: "60%",
  });

  useEffect(() => {
    const fontSize = 60;
    new Vara(
      "#container",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Parisienne/Parisienne.json",
      [
        {
          text: "Will you be my Valentine?",
          fromCurrentPosition: { y: false },
          y: 10,
          duration: 3000,
        },
      ],
      {
        strokeWidth: 2,
        color: "#dc2626",
        fontSize: fontSize,
        textAlign: "center",
      }
    );
  }, []);

  const moveNoButton = () => {
    if (firstLoad) {
      setFirstLoad(false);
    }
    const randomTop = Math.floor(Math.random() * 80) + 10 + "%";
    const randomLeft = Math.floor(Math.random() * 80) + 10 + "%";
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://blog.aweber.com/wp-content/uploads/2016/01/heartsfalling.gif')",
      }}>
      <div className="w-2/3">
        <div id="container"></div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => router.push("/yes")}
          className="px-5 py-1 bg-red-500 text-4xl text-white font-semibold font-text rounded-lg hover:bg-red-600 transition">
          Yes
        </button>
        {firstLoad ? (
          <button
            onMouseEnter={moveNoButton}
            className="px-5 py-1 bg-gray-300 text-4xl text-gray-700 font-semibold font-text rounded-lg hover:bg-gray-400 transition">
            No
          </button>
        ) : (
          <button
            onMouseEnter={moveNoButton}
            style={{
              position: "absolute",
              top: noButtonPosition.top,
              left: noButtonPosition.left,
            }}
            className="px-5 py-1 bg-gray-300 text-4xl text-gray-700 font-semibold font-text rounded-lg hover:bg-gray-400 transition">
            No
          </button>
        )}
      </div>
    </div>
  );
}
