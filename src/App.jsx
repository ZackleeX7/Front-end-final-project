import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Selamat Datang di Inventori Produk</h2>
        <p className="text-gray-700">
          Ini adalah aplikasi sederhana untuk mengelola daftar produk dengan fitur CRUD.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default App;
