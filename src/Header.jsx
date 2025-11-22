import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Inventori Produk</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-200">
                Produk
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">
                Tentang
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
