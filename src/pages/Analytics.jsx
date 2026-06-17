import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const expenseData = [
  { name: "Food", value: 1200 },
  { name: "Bills", value: 1500 },
  { name: "Travel", value: 800 },
  { name: "Shopping", value: 2500 },
];

const monthlyData = [
  { month: "Jan", expenses: 5000 },
  { month: "Feb", expenses: 4200 },
  { month: "Mar", expenses: 6100 },
  { month: "Apr", expenses: 4800 },
  { month: "May", expenses: 5500 },
  { month: "Jun", expenses: 4400 },
];

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f97316",
  "#ec4899",
];

export default function Analytics() {
  return (
    <>
      <Sidebar />

      <div className="md:ml-64 min-h-screen bg-[#F8F6F1] p-6 pb-24">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Analytics
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor your spending patterns and financial insights.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Total Expenses
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-2">
              ₹4,400
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Top Category
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              Shopping
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Average Monthly Spend
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              ₹5,000
            </h2>
          </div>

        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-3xl shadow p-6 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Expense Distribution
          </h2>

          <div className="w-full h-[350px]">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {expenseData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-3xl shadow p-6">

          <h2 className="text-2xl font-bold mb-6">
            Monthly Expenses
          </h2>

          <div className="w-full h-[350px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="expenses"
                  fill="#22c55e"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <BottomNav />
    </>
  );
}