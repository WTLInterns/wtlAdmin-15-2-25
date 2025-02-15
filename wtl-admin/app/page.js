import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6 pt-20">
          {/* Table or content goes here */}
         
        </main>
      </div>
    </div>
  );
}
