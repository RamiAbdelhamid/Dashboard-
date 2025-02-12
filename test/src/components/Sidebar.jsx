import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        {/* زر إضافة مستخدم */}
        <li className="mb-8">
          <Link
            to="/Dashboard"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Dashboard
          </Link>
        </li>

        {/* زر إضافة مستخدم */}
        <li className="mb-8">
          <Link
            to="/adduser"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Add User
          </Link>
        </li>

        {/* زر إضافة منشور */}
        <li className="mb-8">
          <Link
            to="/addpost"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Add Post
          </Link>
        </li>

        {/* زر عرض المستخدمين المحظورين */}
        <li className="mb-8">
          <Link
            to="/blockedusers"
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Blocked Users
          </Link>
        </li>

        <li className="mb-8">
          <Link
            to="/PostList"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Owner Approval{" "}
          </Link>
        </li>

        <li className="mb-8">
          <Link
            to="/UserList"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Users{" "}
          </Link>
        </li>

        <li>
          <Link
            to="/ContactList"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            ContactList
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
