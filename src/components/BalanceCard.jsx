export default function BalanceCard({
  title,
  amount,
  color = "text-black",
}) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition duration-300">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h3 className={`text-3xl font-bold mt-2 ${color}`}>
        {title === "Budget Used"
          ? `${amount}%`
          : amount.toLocaleString()}
      </h3>
    </div>
  );
}