import React from "react";

const chocolateBgUrl =
  "https://img.freepik.com/free-vector/doughnut-pink-delicious-glaze-background_23-2148271333.jpg?semt=ais_hybrid&w=740";

export default function Title() {
  return (
    <section
      className="relative flex justify-center items-center py-24 "
      style={{
        backgroundImage: `url(${chocolateBgUrl})`,
        backgroundRepeat: "repeat",
        backgroundSize: "80px 80px",
        backgroundBlendMode: "multiply",
      }}
    >
      <h1 className="text-7xl font-extrabold text-yellow-100 drop-shadow-lg select-none">
        About Us
      </h1>
    </section>
  );
}
