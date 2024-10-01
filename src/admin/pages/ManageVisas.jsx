import React from "react";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

const ManageVisas = () => {
  // Sample data for Visas (replace this with your data)
  const Visas = [
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
    <div className="container mx-auto  ">
      <h1 className="text-3xl font-bold text-[#00a39a] mb-6">Manage Visas</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Visa Image
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Visa Title
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Visas.map((Visa) => (
              <tr key={Visa.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">
                  <img
                    src={Visa.image}
                    alt={Visa.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b text-gray-700">
                  {Visa.title}
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
                    <Link to={`${Visa.id}/edit`}>
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

export default ManageVisas;
