export const Newsletter = () => {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8">Get updates on new collections and sustainable initiatives.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300"
            />
            <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };