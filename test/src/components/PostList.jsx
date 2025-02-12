import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  approvePost,
  deletePost,
} from "../redux/actions/postActions";
import Swal from "sweetalert2";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = (postId, postTitle) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${postTitle}".`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(postId));
        Swal.fire("Deleted!", `"${postTitle}" has been deleted.`, "success");
      }
    });
  };
return (
  <div className="p-4 max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Posts</h2>

    {/* شبكة عرض البطاقات */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-gray-300 shadow-sm rounded-lg p-4"
        >
          {/* عرض الصورة */}
          {post.images ? (
            <img
              src={post.images}
              alt={post.name || "Post Image"}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-3">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {/* عنوان المنشور */}
          <h3 className="text-lg font-semibold text-gray-800">
            {post.name || "No Name"}
          </h3>

          {/* الوصف */}
          <p className="text-gray-600 text-sm mb-2">
            {post.description || "No Description"}
          </p>

          {/* التفاصيل الإضافية */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Location:</strong> {post.location || "N/A"}
            </p>
            <p>
              <strong>Price:</strong> {post.price || "N/A"}
            </p>
            <p>
              <strong>Availability:</strong> {post.availability || "N/A"}
            </p>
            <p>
              <strong>Daily Booking:</strong> {post.daily_booking || "N/A"}
            </p>
            <p>
              <strong>Booking Duration:</strong>{" "}
              {post.booking_duration || "N/A"}
            </p>
            <p>
              <strong>Approval Status:</strong> {post.approve || "N/A"}
            </p>
          </div>

          {/* أزرار التحكم */}
          <div className="mt-4 flex space-x-2">
            {!post.approved && (
              <button
                onClick={() => dispatch(approvePost(post.id))}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
              >
                Approve
              </button>
            )}
            <button
              onClick={() => handleDeletePost(post.id, post.name)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);


  
};

export default PostList;
