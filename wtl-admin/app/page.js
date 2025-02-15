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
          <div className="border bg-white p-4 rounded-md shadow-md">
            <h2 className="text-gray-700 font-semibold">Customer Details</h2>
            <p className="text-gray-500">Pickup | Drop | Trip Details | Trip Status</p>
          </div>
        </main>
      </div>
    </div>
  );
}
