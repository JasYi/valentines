"use client";

import React, { useEffect } from "react";

const VaraText = ({ text }) => {
  useEffect(() => {
    var vara = new Vara(
      "#container",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 40,
          strokeWidth: 0.7,
        },
      ]
    );
  }, []);

  return <div id="container" className="z-[20]"></div>;
};
