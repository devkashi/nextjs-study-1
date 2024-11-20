import "../home/style.css";
import React from "react";
import Image from "next/image";
import Imageweb from "../../../public/image/1Webinar.jpg";
export default function Blog() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Blog Post Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Title of the Blog Post
          </h1>
          <p className="text-sm text-gray-500">
            Posted on January 1, 2024 by John Doe
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Blog Content */}
          <div className="col-span-2">
            <div className="mb-6">
              <Image
                src={Imageweb}
                alt="Blog Post Image"
                className="w-full h-64 object-cover rounded-lg"
                width={500}
                height={500}
              />
            </div>

            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                laoreet diam nec est egestas, in ullamcorper metus tempor.
                Integer in urna ac orci sodales auctor a in purus. Donec id urna
                sed lectus euismod tincidunt non sit amet neque.
              </p>
              <p>
                Curabitur dapibus, velit at dignissim dictum, enim ante
                vestibulum risus, id convallis enim neque eu arcu. Integer
                scelerisque dui purus, ac tincidunt libero dapibus vel. Nullam
                euismod magna id neque gravida, ac scelerisque velit
                condimentum.
              </p>
              <p>
                Aenean egestas, risus ac dapibus volutpat, sapien leo laoreet
                velit, eget malesuada metus tortor ac ante. Proin vulputate
                justo ut suscipit vestibulum. Curabitur sed turpis euismod,
                feugiat magna sit amet, facilisis leo. Integer et arcu et elit
                eleifend faucibus a nec sapien.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:block hidden space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Categories
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Health
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Lifestyle
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Recent Posts
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    How to Stay Healthy in 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Top 10 Tech Gadgets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Business Growth Strategies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 py-6 bg-gray-50">
          <p className="text-sm text-gray-600">
            © 2024 My Blog. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
