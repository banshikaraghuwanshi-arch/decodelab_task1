export default function AddExpense() {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">

      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6">
          Add Expense
        </h1>

        <input
          placeholder="Category"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="number"
          placeholder="Amount"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="date"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <textarea
          placeholder="Notes"
          className="w-full border p-3 rounded-xl mb-6"
        />

        <button className="w-full bg-green-700 text-white py-3 rounded-xl">
          Save Expense
        </button>

      </div>
    </div>
  );
}