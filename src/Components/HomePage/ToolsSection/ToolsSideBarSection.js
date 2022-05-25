import React from "react";
import ToolsMainSection from "./ToolsMainSection";

const ToolsSideBarSection = () => {
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form
                  action=""
                  className="border-t border-gray-200 lg:border-t-0"
                >
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

                        <label
                          htmlFor="car-security"
                          className="ml-3 text-sm font-medium"
                        >
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

                        <label
                          htmlFor="car-gadgets"
                          className="ml-3 text-sm font-medium"
                        >
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

                        <label
                          htmlFor="car-accessories"
                          className="ml-3 text-sm font-medium"
                        >
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

                          <label
                            htmlFor="99+"
                            className="ml-3 text-sm font-medium"
                          >
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

                          <label
                            htmlFor="599+"
                            className="ml-3 text-sm font-medium"
                          >
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

                          <label
                            htmlFor="999+"
                            className="ml-3 text-sm font-medium"
                          >
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

                          <label
                            htmlFor="1299+"
                            className="ml-3 text-sm font-medium"
                          >
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
                  <span className="hidden sm:inline"> Showing </span>0 of 0
                  Products
                </p>

                <div className="ml-4 text-black">
                  <label htmlFor="SortBy" className="sr-only">
                    Sort
                  </label>

                  <select
                    id="SortBy"
                    name="sort_by"
                    className="text-sm border-gray-500 rounded"
                  >
                    <option readOnly>Sort</option>
                    <option value="title-asc">Title, A-Z</option>
                    <option value="title-desc">Title, Z-A</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>
              {<ToolsMainSection />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
/* window.addEventListener("resize", () => {
  const desktopScreen = window.innerWidth < 768;
  document.querySelector("details").open = !desktopScreen;
}); */
export default ToolsSideBarSection;
