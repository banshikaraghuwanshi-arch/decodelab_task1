import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

const transactions = [
  { title: "McDonald's", amount: -350 },
  { title: "Salary", amount: 25000 },
  { title: "Uber", amount: -200 },
  { title: "Electricity Bill", amount: -1500 },
];

export default function Transactions() {
  return (
    <>
      <Sidebar />

      <div className="md:ml-64 p-6 pb-24">

        <h1 className="text-3xl font-bold mb-6">
          Transactions
        </h1>

        <input
          placeholder="Search transactions"
          className="w-full border rounded-xl p-3 mb-6"
        />

        <div className="space-y-4">
          {transactions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-4 flex justify-between"
            >
              <span>{item.title}</span>

              <span
                className={
                  item.amount > 0
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                ₹{item.amount}
              </span>
            </div>
          ))}
        </div>

      </div>

      <BottomNav />
    </>
  );
}