export default function Admin() {
  const stats = [
    { label: "Total Users", value: "1,248", color: "bg-blue-600" },
    { label: "Active Sessions", value: "312", color: "bg-green-600" },
    { label: "Admin Actions", value: "84", color: "bg-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center"
          >
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className={`text-3xl font-bold mt-2 ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Users List</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Role</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">Karan</td>
              <td className="py-3">karan@example.com</td>
              <td className="py-3">User</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Admin</td>
              <td className="py-3">admin@site.com</td>
              <td className="py-3">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
