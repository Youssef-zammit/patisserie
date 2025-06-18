import React from "react";

interface Shiff {
  id: number;
  name: string;
  post: string;
  imageUrl: string;
}

const shiffs: Shiff[] = [
  {
    id: 1,
    name: "Captain Ahab",
    post: "Harpoon Specialist",
    imageUrl:
      "https://www.yourfreecareertest.com/wp-content/uploads/2017/05/baker.jpg",
  },
  {
    id: 2,
    name: "First Mate Ishmael",
    post: "Navigator",
    imageUrl:
      "https://www.bakersdelight.com.au/wp-content/uploads/2024/11/Baker-standing-in-bakery-600x600.jpg",
  },
  {
    id: 3,
    name: "Quartermaster Queequeg",
    post: "Weapons Expert",
    imageUrl:
      "https://www.culinarycareer.net/wp-content/uploads/2015/10/baker.jpg",
  },
];

function Shiff({ id, imageUrl, name, post }: Shiff) {
  return (
    <li
      key={id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer border border-transparent hover:border-indigo-500 dark:hover:border-indigo-400"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-36 h-36 rounded-full object-cover mb-5 ring-4 ring-indigo-100 dark:ring-indigo-700 transition-shadow duration-300 hover:ring-indigo-300 dark:hover:ring-indigo-400"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {name}
      </h3>
      <p className="text-md text-indigo-600 dark:text-indigo-400 font-medium tracking-wide">
        {post}
      </p>
    </li>
  );
}

export function ShiffList() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-gray-700 transition-colors duration-500">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
        Our Shiffs
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {shiffs.map(({ id, name, post, imageUrl }) => (
          <Shiff key={id} name={name} id={id} post={post} imageUrl={imageUrl} />
        ))}
      </ul>
    </div>
  );
}
