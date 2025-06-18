import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function CollectionPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [products, setProducts] = useState([]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Mock product data
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Product 1",
        price: "$20",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        name: "Product 2",
        price: "$30",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        name: "Product 3",
        price: "$25",
        image: "https://via.placeholder.com/300",
      },
      // add more products as needed
    ]);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Dark mode toggle button */}
      <div className="flex justify-end mb-4">
        <Button variant="outline" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      {/* Collection Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        All Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {product.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
