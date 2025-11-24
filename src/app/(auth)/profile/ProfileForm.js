"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfileForm({ user }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlelogout = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/logout", {
      method: "GET"
    });
    const data = await res.json();

    if(data.success) {
      toast.success(data?.message);
      router.push("/login");
      router.refresh();
    } else {
      toast.error(data?.message);
      console.log("Login Error:", data?.error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-lg w-full border border-gray-200">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300"></div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">{user.name}</h2>
          <p className="text-gray-600 text-sm">{user?.email}</p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              <strong>Username:</strong> {user?.username}
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>

          <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition" onClick={handlelogout}>
            {loading ? "Logging Out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
