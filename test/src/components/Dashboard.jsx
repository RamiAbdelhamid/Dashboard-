import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import { fetchUsers } from "../redux/actions/userActions";
import Sidebar from "./Sidebar";
import UserList from "./UserList";
import Postlist from "./Postlist";
import ContactList from "./ContactList";
const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="flex">
      {/* Sidebar ثابت على الجانب الأيسر ويمتد لطول الشاشة */}
      <div className="fixed w-64 h-screen">
        <Sidebar />
      </div>

      {/* محتوى الـ Dashboard مع هامش يساوي عرض الـ Sidebar */}
      <div className="flex-1 ml-64 bg-[#E6B400] p-6 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Dashboard Content
        </h2>

        <div className="mb-6">
          <Postlist />
        </div>

        <div className="mb-6">
          <UserList />
        </div>
        <div className="mb-6">
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
