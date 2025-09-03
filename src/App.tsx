import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4">
      {/* HTX Hoop Club Title */}
      <h1
        className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage: "url('/ball-texture.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        HTX Hoop Club
      </h1>

      {/* Coming Soon Subtitle */}
      <p className="text-xl text-gray-300 mb-8">Coming Soon to a Court near You</p>

      {/* Join Waitlist Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
      >
        Join Waitlist
      </button>

      {/* Popup Modal */}
{isOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
        Join the Waitlist
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpen(false);
          alert("Thank you for joining the waitlist!");
        }}
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
}

export default App;
