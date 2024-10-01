import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const EditBlogForm = () => {
  const [title, setTitle] = useState("Dummy Title");
  const [image, setImage] = useState("/api/placeholder/400/300");
  const [description, setDescription] = useState(
    "<p>This is a dummy description.</p>"
  );
  const [faqs, setFaqs] = useState([
    { question: "Dummy question 1?", answer: "Dummy answer 1." },
    { question: "Dummy question 2?", answer: "Dummy answer 2." },
  ]);

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleSave = () => {
    console.log("Saving form data:", { title, image, description, faqs });
    // Add your save logic here
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image
        </label>
        <img
          src={image}
          alt="Selected"
          className="mt-1 w-full h-48 object-cover rounded-md"
        />
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => setDescription(editor.getData())}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          FAQs
        </label>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-2 border border-gray-200 rounded-md"
          >
            <input
              type="text"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              placeholder="Question"
              className="mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:bg-gray-100  focus:outline-none focus:ring-opacity-50"
            />
            <textarea
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
              placeholder="Answer"
              className="mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
              rows="3"
            ></textarea>
            <button
              onClick={() => handleRemoveFaq(index)}
              className="text-red-600 hover:text-red-800"
            >
              <MdRemoveCircle className="inline mr-1" /> Remove FAQ
            </button>
          </div>
        ))}
        <button
          onClick={handleAddFaq}
          className="text-indigo-600 hover:text-indigo-800"
        >
          <MdAddCircle className="inline mr-1" /> Add FAQ
        </button>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Save
      </button>
    </div>
  );
};

export default EditBlogForm;
