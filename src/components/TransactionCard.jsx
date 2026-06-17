export default function TransactionCard({
  title,
  date,
  amount,
}) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-none">

      <div>
        <p className="font-medium text-gray-800">
          {title}
        </p>

        <p className="text-sm text-gray-500">
          {date}
        </p>
      </div>

      <span
        className={`font-semibold ${
          amount > 0
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {amount > 0
          ? `+₹${amount.toLocaleString()}`
          : `-₹${Math.abs(amount).toLocaleString()}`}
      </span>

    </div>
  );
}