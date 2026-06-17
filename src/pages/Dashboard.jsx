import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import BalanceCard from "../components/BalanceCard";
import TransactionCard from "../components/TransactionCard";

import { FaArrowUp, FaArrowDown, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const recentTransactions = [
  {
    title: "McDonald's",
    date: "Today",
    amount: -350,
  },
  {
    title: "Salary",
    date: "Yesterday",
    amount: 25000,
  },
  {
    title: "Uber",
    date: "12 Jun",
    amount: -200,
  },
  {
    title: "Electricity Bill",
    date: "10 Jun",
    amount: -1500,
  },
];

export default function Dashboard() {
   const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";
  return (
    <>
      <Sidebar />

      <div className="md:ml-64 min-h-screen bg-[#F8F6F1] p-6 pb-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold">
              {greeting} 👋
            </h1>

            <p className="text-gray-500">
              Here's your financial overview.
            </p>
          </div>

          <Link to="/add-expense">
            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-2xl flex items-center gap-2 transition">
              <FaPlus />
              Add Expense
            </button>
          </Link>

        </div>

        {/* Balance Overview */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white rounded-3xl p-8 shadow-lg mb-8">

          <p className="text-sm opacity-80">
            Total Balance
          </p>

          <h2 className="text-4xl font-bold mt-2">
            ₹25,600
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div>
              <p className="text-sm opacity-80">
                Income
              </p>

              <div className="flex items-center gap-2 mt-2">
                <FaArrowUp />
                <span className="font-semibold">
                  ₹30,000
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm opacity-80">
                Expenses
              </p>

              <div className="flex items-center gap-2 mt-2">
                <FaArrowDown />
                <span className="font-semibold">
                  ₹4,400
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          <BalanceCard
            title="This Month Savings"
            amount={8000}
            color="text-green-700"
          />

          <BalanceCard
            title="Transactions"
            amount={45}
            color="text-blue-600"
          />

          <BalanceCard
            title="Budget Used"
            amount={60}
            color="text-orange-500"
          />

        </div>

        {/* Budget Progress */}
        <div className="bg-white rounded-3xl shadow p-6 mb-8">

          <div className="flex justify-between mb-3">

            <span className="font-semibold">
              Monthly Budget
            </span>

            <span>
              ₹12,000 / ₹20,000
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: "60%" }}
            ></div>

          </div>

        </div>

        {/* Expense Categories */}
        <div className="bg-white rounded-3xl shadow p-6 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Top Expense Categories
          </h2>

          <div className="space-y-5">

            {[
              {
                name: "Food",
                amount: "₹1,200",
                width: "70%",
              },
              {
                name: "Shopping",
                amount: "₹2,500",
                width: "90%",
              },
              {
                name: "Travel",
                amount: "₹800",
                width: "45%",
              },
              {
                name: "Bills",
                amount: "₹1,500",
                width: "60%",
              },
            ].map((item, index) => (
              <div key={index}>

                <div className="flex justify-between mb-2">

                  <span>{item.name}</span>

                  <span>{item.amount}</span>

                </div>

                <div className="bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: item.width }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-3xl shadow p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Recent Transactions
            </h2>

            <Link
              to="/transactions"
              className="text-green-700 font-medium hover:underline"
            >
              View All
            </Link>

          </div>

          <div className="space-y-4">

            {recentTransactions.map((item, index) => (
              <TransactionCard
                key={index}
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            ))}

          </div>

        </div>

      </div>

      <BottomNav />
    </>
  );
}