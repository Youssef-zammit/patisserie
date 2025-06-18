const orders = [
  {
    orderId: "12345",
    customerid: "Jane Doe",
    items: [
      { name: "Chocolate Cake", quantity: 1 },
      { name: "Cupcake", quantity: 6 },
    ],
    totalPrice: "$45.00",
    status: "Processing",
    orderDate: "2025-06-18",
  },
];

function Order({
  orderId,
  customerName,
  items,
  totalPrice,
  status,
  orderDate,
}) {
  const statusColors = {
    Pending: "bg-yellow-300 text-yellow-900",
    Processing: "bg-pink-300 text-pink-900",
    Completed: "bg-green-300 text-green-900",
    Cancelled: "bg-red-300 text-red-900",
  };
  return (
    <div
      key={orderId}
      className="bg-white dark:bg-gray-900 rounded-3xl shadow-md dark:shadow-pink-900 p-8 transition-colors duration-300"
    >
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
          {items.map(({ name, quantity }, idx) => (
            <li key={idx}>
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
export function OrdersList() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {orders.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No orders found.
        </p>
      ) : (
        orders.map(
          ({ orderId, customerName, items, totalPrice, status, orderDate }) => (
            <Order
              orderId={orderId}
              customerName={customerName}
              items={items}
              totalPrice={totalPrice}
              status={status}
              orderDate={orderDate}
            />
          )
        )
      )}
    </div>
  );
}
