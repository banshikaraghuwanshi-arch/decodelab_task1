import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <>
      <Sidebar />

      <div className="md:ml-64 p-6 pb-24">

        <div className="bg-white shadow rounded-3xl p-8 max-w-xl">

          <div className="text-center">

            <img
              src="https://ui-avatars.com/api/?name=Banshika"
              alt="profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />

            <h1 className="text-2xl font-bold">
              Banshika Raghuwanshi
            </h1>

            <p className="text-gray-500">
              banshika@example.com
            </p>

          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded-xl mt-8">
            Edit Profile
          </button>

        </div>

      </div>

      <BottomNav />
    </>
  );
}