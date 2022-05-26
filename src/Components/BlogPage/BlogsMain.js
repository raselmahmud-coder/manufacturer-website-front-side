import React from "react";
const BlogsMain = () => {
  return (
    <>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">My Blogs</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2">
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

              <h3 className="mt-4 text-xl font-bold text-white">
                1 How will you improve the performance of a React Application?
              </h3>
              <ul className="capitalize">
                <li className="mt-1 text-sm text-gray-300">
                  We should Use React Suspense and React.Lazy for Lazy Loading
                  Components
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  Should Use Production Build and Use React Fragment To Avoid
                  Adding Extra Nodes to the Dom
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  Use React memo for component Memoization & Enable Gzip
                  Compression on Web Server
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  Flat list Optimization React Native Using React-Window
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  We should Dependency Optimization and analysis
                </li>
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

              <h3 className="mt-4 text-xl font-bold text-white">
                2 What are the different ways to manage a state in a React
                application?
              </h3>

              <ul>
                <li className="mt-1 text-sm text-gray-300">
                  Local state is perhaps the easiest kind of state to manage in
                  React, considering there are so many tools built into the core
                  React library for managing it.
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  Manage Global State in React Once you attempt to manage state
                  across multiple components, things get a bit trickier.
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  Manage Server State in React Server state can be deceptively
                  challenging to manage.
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  At first, it seems you just need to fetch data and display it
                  in the page. But then you need to display a loading spinner
                  while you are waiting for the data.
                </li>
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

              <h3 className="mt-4 text-xl font-bold text-white">
                3 How does prototypical inheritance work?
              </h3>
              <ul>
                <li className="mt-1 text-sm text-gray-300">
                  prototypical inheritance refers to the ability to access
                  object properties from another object. We use a JavaScript
                  prototype to add new properties and methods to an existing
                  object constructor. We can then essentially tell our JS code
                  to inherit properties from a prototype
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  Every object with its methods and properties contains an
                  internal and hidden property known as [[Prototype]]. The
                  Prototypal Inheritance is a feature in javascript used to add
                  methods and properties in objects. It is a method by which an
                  object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object.setPrototypeOf. Nowadays, in modern language, it is
                  being set using __proto__.
                </li>
                <code>Syntax: ChildObject.__proto__ = ParentObject</code>
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

              <h3 className="mt-4 text-xl font-bold text-white">
                4 Why you do not set the state directly in React?
              </h3>
              <ul>
                <li className="mt-1 text-sm text-gray-300">
                  React, keeps a track record of all its virtual DOM. Whenever a
                  change happens, all the components are rendered and this new
                  virtual DOM is then compared with the old virtual DOM. Only
                  the differences found are then reflected in the original DOM.
                </li>
                <li className="mt-1 text-sm text-gray-300">
                  So, it's obvious from the statement that if we mutate the
                  state directly, it will change the reference of the state in
                  the previous virtual DOM as well. So, React won't be able to
                  see that there is a change of the state and so it won't be
                  reflected in the original DOM until we reload. The problem is
                  more obvious when we extend a component with
                  React.PureComponent instead of React.component , where React
                  tries to optimize some time by not rendering components if no
                  changes are found.
                </li>
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

              <h3 className="mt-4 text-xl font-bold text-white">
                6 What is a unit test? Why should write unit tests?
              </h3>
              <h3 className="mt-3 text-xl text-white">
               What is a unit test?
              </h3>
              <ul>
                <li className="mt-1 text-sm text-gray-300">
                Definition: This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.
                </li>
              </ul>
              <h3 className="mt-3 text-xl text-white">
             Why should write unit tests?
              </h3>
              <ul>
                <li className="mt-1 text-sm text-gray-300">
                Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs that's why I think.
                </li>
              </ul>
            </div>

      
          </div>

          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
              href="/get-started"
            >
              <span className="text-sm font-medium"> Read More </span>

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
    </>
  );
};

export default BlogsMain;
