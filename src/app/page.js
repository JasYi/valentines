"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Vara from "vara";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const fontSize = 60;
    new Vara(
      "#container",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Will you be my Valentine?",
          fromCurrentPosition: { y: false },
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

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
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
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
          Yes
        </button>
        <button className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition">
          No
        </button>
      </div>
    </div>
  );
}
