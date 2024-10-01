import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const EditVisaForm = () => {
  const [title, setTitle] = useState("Dummy Title");
  const [image, setImage] = useState("/api/placeholder/400/300");
  const [description, setDescription] = useState(
    "<p>This is a dummy description.</p>"
  );

  const [about, setAbout] = useState("<p>This is a dummy About.</p>");
  const [questions, setQuestions] = useState([
    { question: "Dummy question 1?", answer: "Dummy answer 1." },
    { question: "Dummy question 2?", answer: "Dummy answer 2." },
  ]);

  const [faqs, setFaqs] = useState([
    { question: "Dummy question 1?", answer: "Dummy answer 1." },
    { question: "Dummy question 2?", answer: "Dummy answer 2." },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

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
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-6">Edit Visa</h2>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
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
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>{" "}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          About
        </label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Questions and Answers
        </label>
        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded-md"
          >
            <input
              type="text"
              value={q.question}
              onChange={(e) =>
                handleQuestionChange(index, "question", e.target.value)
              }
              placeholder="Question"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <CKEditor
              editor={ClassicEditor}
              data={q.answer}
              onChange={(event, editor) =>
                handleQuestionChange(index, "answer", editor.getData())
              }
            />
            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="text-red-500 hover:text-red-700"
            >
              <MdRemoveCircle className="inline mr-1" /> Remove Question
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="mt-2 text-[#00a39a] hover:text-[#136a65]"
        >
          <MdAddCircle className="inline mr-1" /> Add Question
        </button>
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

export default EditVisaForm;
