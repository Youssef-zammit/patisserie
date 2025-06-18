import React from "react";

function Offer({ id, imageUrl, title, description, price }) {
  return (
    <li
      key={id}
      className="bg-pink-50 dark:bg-pink-900 rounded-2xl p-6 flex flex-col items-center text-center border border-pink-300 dark:border-pink-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-36 h-36 rounded-full object-cover mb-5 border-4 border-pink-200 dark:border-pink-700 shadow-sm"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-2">
        {title}
      </h3>
      <p className="text-sm text-pink-600 dark:text-pink-400 font-medium tracking-wide mb-4">
        {description}
      </p>
      <span className="text-pink-800 dark:text-pink-200 font-bold text-lg bg-pink-100 dark:bg-pink-800 px-4 py-1 rounded-full shadow-inner">
        {price}
      </span>
    </li>
  );
}

export function OffersOfTheWeek() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-script text-orange-400 dark:text-orange-500 mb-2"
            style={{ fontFamily: "cursive" }}
          >
            Rendre Les Gens Heureux
          </h2>
          <h3 className="text-4xl font-serif text-slate-800 dark:text-slate-200 mb-8">
            OFFRE CETTE SEMAINE
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main Featured Product */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div
                className="relative bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800 rounded-2xl p-6 h-full cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "#shop")}
              >
                <div className="absolute top-4 left-4">
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-1">
                    Just for Cake Honey
                  </p>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    £9.99
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    from £8.99 to £12.99
                  </p>
                </div>
                <div className="flex justify-center items-center h-64 lg:h-80">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2vySsqieMf_8Px4MczX43Ep9aQSR9jKFHg&s"
                    alt="Honey Pancakes with Berries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors group-hover:scale-105">
                  BUY NOW
                </p>
              </div>
            </div>

            {/* Rose Cupcakes */}
            <div
              className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 rounded-2xl p-4 cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "#shop")}
            >
              <div className="text-center mb-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Just Oily
                </p>
                <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
                  £19.99
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  for CupCakes
                </p>
              </div>
              <div className="flex justify-center mb-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIOchWIIvUH5eRVNBf-vpxJ6B3NJoJ__USA&s"
                  alt="Pink Rose Cupcakes"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <p className="text-xs text-center text-slate-600 dark:text-slate-400 bg-white dark:bg-gray-800 px-2 py-1 rounded">
                UK MEMBERS
              </p>
            </div>

            {/* Sale Item */}
            <div
              className="bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900 dark:to-red-800 rounded-2xl p-4 cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "#shop")}
            >
              <div className="text-center mb-3">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                  SALE 20%
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  today
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://media.cnn.com/api/v1/images/stellar/prod/181127110351-18-50-sweets-travel-tiramisu.jpg?q=w_2391,h_1345,x_0,y_0,c_fill"
                  alt="Special Dessert"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Lollipop Sale */}
            <div
              className="bg-gradient-to-br from-yellow-100 to-green-100 dark:from-yellow-900 dark:to-green-800 rounded-2xl p-4 cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "#shop")}
            >
              <div className="text-center mb-3">
                <div className="bg-yellow-400 text-slate-800 dark:text-yellow-300 px-2 py-1 rounded text-sm font-bold mb-1">
                  SALE 20%
                </div>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  ALL LOLLIPOP
                </p>
                <p className="text-xs text-red-500 font-bold dark:text-red-400">
                  * ONLY TO DAY *
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://preppykitchen.com/wp-content/uploads/2021/10/Cake-Pops-Blog-1.jpg"
                  alt="Colorful Cake Pops"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
