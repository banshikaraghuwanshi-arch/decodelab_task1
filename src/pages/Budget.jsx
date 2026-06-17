import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

export default function Budget() {
  return (
    <>
      <Sidebar />

      <div className="md:ml-64 p-6 pb-24">

        <h1 className="text-3xl font-bold mb-8">
          Budget Planner
        </h1>

        <div className="bg-white rounded-3xl shadow p-6">

          <h2 className="font-semibold">
            Monthly Budget
          </h2>

          <p className="text-4xl font-bold mt-4">
            ₹20,000
          </p>

          <div className="mt-6">
            <p>60% Used</p>

            <div className="bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-600 h-4 rounded-full w-3/5"></div>
            </div>
          </div>

        </div>

      </div>

      <BottomNav />
    </>
  );
}