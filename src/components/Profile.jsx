import React from 'react';

function Profile() {
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

      {/* Profile Details */}
      <main className="flex-1 p-4 bg-gray-50">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div>
              <h1 className="text-3xl font-bold">Bobur Mavlonov</h1>
              <p className="text-gray-600">@bobur_mavlonov</p>
            </div>
          </div>

          <div className="mt-6 border-b border-gray-200 pb-4">
            <p className="text-gray-700">
              <span className="font-bold">67</span> Following &middot; <span className="font-bold">47</span> Followers
            </p>
          </div>

          <div className="mt-4">
            <h2 className="font-bold text-lg">Pinned Tweet</h2>
            <div className="mt-2 bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">4-kursni tugatgunimcha kamida bitta biznesim bo'lishini...</p>
              <div className="flex items-center space-x-4 mt-2">
                <span>❤️ 5</span>
                <span>🔁 9</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-bold text-lg">Tweets</h2>
            <div className="mt-2 bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">Bizda shunaqa bir illat bor...</p>
              <div className="flex items-center space-x-4 mt-2">
                <span>❤️ 5</span>
                <span>🔁 9</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
