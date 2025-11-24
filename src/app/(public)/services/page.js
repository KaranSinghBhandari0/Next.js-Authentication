import { ShieldCheckIcon, KeyIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      title: "Secure Authentication",
      desc: "Robust login and signup system with multiple authentication methods to protect your users.",
      icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Role-Based Access",
      desc: "Control user permissions with fine-grained, scalable access levels for better security.",
      icon: <KeyIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "User Management",
      desc: "Easy-to-use dashboard to manage users, edit roles, and track account activity.",
      icon: <UserGroupIcon className="h-10 w-10 text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 mb-12">
          Powerful authentication solutions to secure your applications and enhance user experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-8 text-center border border-gray-200 hover:-translate-y-1 transform duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}