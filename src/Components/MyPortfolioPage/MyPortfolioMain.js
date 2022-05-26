import React from "react";

const MyPortfolioMain = () => {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">My Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2">
          <div
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14Gjr2AZJ5dXqz63ZwW3GnU5U-d6COl15NEcuKrcHiw=s96-c"
                  alt="profile"
                />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              Name: Md Rasel Mahmud
            </h3>
            <ul className="capitalize">
              <li className="mt-1 text-sm text-gray-300 font-bold">
                Email:{" "}
                <a href="mailto:raselswpu@foxmail.com">raselswpu@foxmail.com</a>
              </li>
              <li className="mt-1 text-sm text-gray-300">
                Educational Background: Bsc in Electrical Engineering, from
                China
              </li>
              <li className="my-4 text-xl font-bold text-white">
                list of technologies familiar with:
              </li>
              <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  JavaScript with ES6
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  React
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  Tailwind, It's component library
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  Bootstrap, it's components library
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">CSS3, HTML5</li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  Node js, Express js
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  WordPress, Domain and hosting integration, Firebase
                </li>
              </ul>
            </ul>
          </div>
          <div
            className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white capitalize">
              This website represent for a single service provider
            </h3>
            <a href="https://assignment-10-8fc08.web.app/" target="_blank" rel="noopener noreferrer">Click Here</a>
            <h3 className="mt-4 text-xl font-bold text-white capitalize">
              This website represent for a small business E-Commerce 
            </h3>
            <a href="https://assignment-11-b89a5.web.app/" target="_blank" rel="noopener noreferrer">Click Here</a>
            <h3 className="mt-4 text-xl font-bold text-white capitalize">
              This website represent for a small business E-Commerce with dashboard admin can customize everything
            </h3>
            <a href="https://autoparts-assign-12.web.app/" target="_blank" rel="noopener noreferrer">Click Here</a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span className="text-sm font-medium"> Hire Me </span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolioMain;
