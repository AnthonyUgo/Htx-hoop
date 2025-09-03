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
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md text-left">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Join the Waitlist
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(false);
                alert("Thank you for joining the waitlist!");
              }}
            >
              {/* Name */}
              <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </label>

              {/* Email */}
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </label>

              {/* Phone */}
              <label className="block mb-6">
                <span className="text-gray-700">Phone</span>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </label>

              {/* Actions */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
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
