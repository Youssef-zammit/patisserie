import React from "react";

export function Order({
  orderId,
  customerName,
  items,
  totalPrice,
  status,
  orderDate,
}) {
  // Updated color coding with pink/yellow theme
  const statusColors = {
    Pending: "bg-yellow-300 text-yellow-900",
    Processing: "bg-pink-300 text-pink-900",
    Completed: "bg-green-300 text-green-900",
    Cancelled: "bg-red-300 text-red-900",
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md dark:shadow-pink-900 p-8 max-w-lg mx-auto transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">
          Order #{orderId}
        </h3>
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide ${
            statusColors[status] || "bg-gray-300 text-gray-800"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg">
        <span className="font-semibold">Customer:</span> {customerName}
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
        <span className="font-semibold">Order Date:</span> {orderDate}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-3 text-xl">
          Items
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-lg">
          {items.map(({ name, quantity }, index) => (
            <li key={index}>
              {name} × {quantity}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">
        Total: {totalPrice}
      </p>
    </div>
  );
}
