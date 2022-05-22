import React from "react";

const ToolsSection = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div className="lg:sticky lg:top-4">
              <details
                open
                className="overflow-hidden border border-gray-200 rounded"
              >
                <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                  <span className="text-sm font-medium">Toggle Filters</span>

                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form action="" className="border-t border-gray-200 lg:border-t-0">
                  <fieldset>
                    <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-500">
                      Categories
                    </legend>

                    <div className="px-5 py-6 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="car-security"
                          type="checkbox"
                          name="type[car-security]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <label for="car-security" className="ml-3 text-sm font-medium">
                          Car Security
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="car-gadgets"
                          type="checkbox"
                          name="type[car-gadgets]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <label for="car-gadgets" className="ml-3 text-sm font-medium">
                          Car Gadgets
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="car-gadgets"
                          type="checkbox"
                          name="type[car-gadgets]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />

                        <label for="car-accessories" className="ml-3 text-sm font-medium">
                          Car Accessories
                        </label>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          className="text-xs text-white underline"
                        >
                          Reset Categories
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <fieldset>
                      <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-500">
                        Price
                      </legend>

                      <div className="px-5 py-6 space-y-2">
                        <div className="flex items-center">
                          <input
                            id="99+"
                            type="checkbox"
                            name="age[99+]"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="99+" className="ml-3 text-sm font-medium">
                            99+
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="599+"
                            type="checkbox"
                            name="age[599+]"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="599+" className="ml-3 text-sm font-medium">
                            599+
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="999+"
                            type="checkbox"
                            name="age[999+]"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="999+" className="ml-3 text-sm font-medium">
                            999+
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="1299+"
                            type="checkbox"
                            name="age[1299+]"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="1299+" className="ml-3 text-sm font-medium">
                            1299+
                          </label>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            className="text-xs text-white underline"
                          >
                            Reset Price
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                    <button
                      name="reset"
                      type="button"
                      className="text-xs font-medium text-white underline rounded"
                    >
                      Reset All
                    </button>

                    <button
                      name="commit"
                      type="button"
                      className="px-5 py-3 text-xs font-medium text-white bg-green-400 rounded"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white">
                  <span className="hidden sm:inline">Showing</span> 6 of 24 Products
                </p>

                <div className="ml-4 text-black">
                  <label for="SortBy" className="sr-only">
                    Sort
                  </label>

                  <select
                    id="SortBy"
                    name="sort_by"
                    className="text-sm border-gray-500 rounded"
                  >
                    <option readonly>Sort</option>
                    <option value="title-asc">Title, A-Z</option>
                    <option value="title-desc">Title, Z-A</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px mt-4 bg-gray-500 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/product/build-your-own-drone"
                  className="relative block bg-white"
                >
                  <button
                    type="button"
                    name="wishlist"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>

                  <img
                    loading="lazy"
                    alt="Build Your Own Drone"
                    className="object-contain w-full h-56 lg:h-72"
                    src="https://www.hyperui.dev/photos/toy-1.jpeg"
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                      New
                    </span>

                    <h5 className="mt-4 text-lg font-bold text-gray-800">Build Your Own Drone</h5>

                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>

                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                <a
                  href="/product/build-your-own-drone"
                  className="relative block bg-white"
                >
                  <button
                    type="button"
                    name="wishlist"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>

                  <img
                    loading="lazy"
                    alt="Build Your Own Drone"
                    className="object-contain w-full h-56 lg:h-72"
                    src="https://www.hyperui.dev/photos/toy-1.jpeg"
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                      New
                    </span>

                    <h5 className="mt-4 text-lg font-bold text-gray-600">Build Your Own Drone</h5>

                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>

                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                <a
                  href="/product/build-your-own-drone"
                  className="relative block bg-white"
                >
                  <button
                    type="button"
                    name="wishlist"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>

                  <img
                    loading="lazy"
                    alt="Build Your Own Drone"
                    className="object-contain w-full h-56 lg:h-72"
                    src="https://www.hyperui.dev/photos/toy-1.jpeg"
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                      New
                    </span>

                    <h5 className="mt-4 text-lg font-bold text-gray-600">Build Your Own Drone</h5>

                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>

                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                <a
                  href="/product/build-your-own-drone"
                  className="relative block bg-white"
                >
                  <button
                    type="button"
                    name="wishlist"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>

                  <img
                    loading="lazy"
                    alt="Build Your Own Drone"
                    className="object-contain w-full h-56 lg:h-72"
                    src="https://www.hyperui.dev/photos/toy-1.jpeg"
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                      New
                    </span>

                    <h5 className="mt-4 text-lg font-bold text-gray-600">Build Your Own Drone</h5>

                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>

                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                <a
                  href="/product/build-your-own-drone"
                  className="relative block bg-white"
                >
                  <button
                    type="button"
                    name="wishlist"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>

                  <img
                    loading="lazy"
                    alt="Build Your Own Drone"
                    className="object-contain w-full h-56 lg:h-72"
                    src="https://www.hyperui.dev/photos/toy-1.jpeg"
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                      New
                    </span>

                    <h5 className="mt-4 text-lg font-bold text-gray-600">Build Your Own Drone</h5>

                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>

                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                <a
                  href="/product/build-your-own-drone"
                  className="relative block bg-white"
                >
                  <button
                    type="button"
                    name="wishlist"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>

                  <img
                    loading="lazy"
                    alt="Build Your Own Drone"
                    className="object-contain w-full h-56 lg:h-72"
                    src="https://www.hyperui.dev/photos/toy-1.jpeg"
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                      New
                    </span>

                    <h5 className="mt-4 text-lg font-bold text-gray-600">Build Your Own Drone</h5>

                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>

                    <button
                      name="add"
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>

                      <svg
                        className="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
window.addEventListener("resize", () => {
  const desktopScreen = window.innerWidth < 768;

  document.querySelector("details").open = !desktopScreen;
});
export default ToolsSection;
