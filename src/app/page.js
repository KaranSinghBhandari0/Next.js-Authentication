import { ShieldCheckIcon, ArrowRightIcon, UserGroupIcon, KeyIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Secure, Fast & Modern
          <span className="text-blue-600"> Authentication</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          AuthPortal provides a powerful authentication solution to protect your users,
          manage roles, and secure your web applications with ease.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
            Get Started <ArrowRightIcon className="h-5 w-5" />
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose AuthPortal?</h2>
          <p className="text-gray-600 mt-2">Everything you need for secure user access.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition border border-gray-200">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Security</h3>
            <p className="text-gray-600 text-sm">
              Built with strong encryption, secure sessions, and modern security standards.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition border border-gray-200">
            <KeyIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentication Options</h3>
            <p className="text-gray-600 text-sm">
              Email-password, OTP, OAuth, role-based login — fully customizable.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition border border-gray-200">
            <UserGroupIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User Management</h3>
            <p className="text-gray-600 text-sm">
              Manage users, roles, sessions, and permissions in one clean dashboard.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 to-blue-800 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to secure your application?</h2>
        <p className="text-gray-200 mb-8">Get started in just a few clicks.</p>

        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center gap-2 mx-auto">
          Start Now <ArrowRightIcon className="h-5 w-5" />
        </button>
      </section>

    </div>
  );
}