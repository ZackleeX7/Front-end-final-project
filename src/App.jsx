import Header from "./Header";
import Footer from "./Footer";
import ProductSection from "./ProductSection";
import FilterPanel from "./features/products/FilterPanel";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-grow container mx-auto p-6 space-y-6">
    <h2 className="text-2xl font-semibold">
      Selamat Datang di Inventori Produk
    </h2>
    <p className="text-gray-700">
      Ini adalah aplikasi sederhana untuk mengelola daftar produk dengan fitur CRUD.
    </p>
    <ProductSection />
  </main>
  <Footer />
</div>

  );
};

export default App;
