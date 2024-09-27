import React from 'react';

function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-100 p-4 border-r border-gray-300">
        <ul className="space-y-4">
          <li className="font-bold text-lg hover:bg-gray-200 p-2 rounded-lg">Home</li>
          <li className="hover:bg-gray-200 p-2 rounded-lg">Explore</li>
          <li className="hover:bg-gray-200 p-2 rounded-lg">Notifications</li>
          <li className="hover:bg-gray-200 p-2 rounded-lg">Messages</li>
          <li className="hover:bg-gray-200 p-2 rounded-lg">Bookmarks</li>
          <li className="hover:bg-gray-200 p-2 rounded-lg">Lists</li>
          <li className="hover:bg-gray-200 p-2 rounded-lg">Profile</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-50">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <textarea
            placeholder="What's happening?"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">
            Tweet
          </button>
        </div>

        {/* Tweets */}
        <div className="mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="text-gray-800">
              Twitterdagi ayol-erkak qarama-qarshiligidan zerikmadinglarmi?
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <span>❤️ 10</span>
              <span>🔁 8</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="text-gray-800">Obetga.... Kechiringlar</p>
            <img
              src="https://via.placeholder.com/200"
              alt="Food"
              className="w-full h-auto mt-2 rounded"
            />
            <div className="flex items-center space-x-4 mt-2">
              <span>❤️ 10</span>
              <span>🔁 2</span>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-72 h-screen bg-gray-50 p-4 border-l border-gray-300">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Trends for you</h3>
          <div className="mt-4">
            <p>Trending in Germany</p>
            <h4 className="font-bold">Revolution</h4>
            <p>50.4K Tweets</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold">Who to follow</h3>
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold">Mushtariy</h4>
                <p className="text-gray-500">@Mushtar565266</p>
              </div>
              <button className="ml-auto bg-blue-500 text-white py-1 px-4 rounded-lg">
                Follow
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Home;
