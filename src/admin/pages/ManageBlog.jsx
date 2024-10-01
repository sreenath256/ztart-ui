import React from "react";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

const ManageBlog = () => {
  // Sample data for Blogs (replace this with your data)
  const Blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "JavaScript Best Practices",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto w-full ">
      <h1 className="text-3xl font-bold text-[#00a39a] mb-6">Manage Blogs</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Blog Image
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Blog Title
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Blogs.map((Blog) => (
              <tr key={Blog.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">
                  <img
                    src={Blog.image}
                    alt={Blog.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b text-gray-700">
                  {Blog.title}
                </td>
                <td className="px-4 py-3 border-b s space-x-2">
                  <button
                    className="text-[#00a39a] hover:bg-gray-100 p-2 rounded"
                    aria-label="View Visa"
                  >
                    <MdVisibility size={20} />
                  </button>
                  <button
                    className="text-blue-500 hover:bg-gray-100 p-2 rounded"
                    aria-label="Edit Visa"
                  >
                    <Link to={`${Blog.id}/edit`}>
                    <MdEdit size={20} />
                    </Link>
                  </button>
                  <button
                    className="text-red-500 hover:bg-gray-100 p-2 rounded"
                    aria-label="Delete Visa"
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
                {/* <td className="px-4 py-3 border-b text-gray-700">{Visa.title}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlog;
