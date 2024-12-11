"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../_utils/auth-context";

const NewBlog = () => {
  const router = useRouter();
  const { user } = useUserAuth();
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    image: null,
  });
  const [imageError, setImageError] = useState("");

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      router.push("/Login?redirect=/blogs/new-blog");
    }
  }, [user, router]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file change (validate and convert to Base64)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (1MB = 1024 * 1024 bytes)
      if (file.size > 1024 * 1024) {
        setImageError("Image size must be less than 1MB.");
        setFormData({ ...formData, image: null });
        return;
      }

      setImageError(""); // Reset error message if file size is valid

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result }); // Set Base64 string
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      author: formData.author,
      title: formData.title,
      description: formData.description,
      image: formData.image, // Send Base64 string to the backend
    };

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog created:", data.id);
        router.push("/blogs"); // Redirect to blogs page after successful submission
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add New Blog
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Author Name */}
          <div className="relative">
            <input
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
            />
            <label
              htmlFor="author"
              className="absolute text-sm font-medium text-gray-500 top-0 left-2 -translate-y-1/2 bg-white px-1"
            >
              Author Name
            </label>
          </div>

          {/* Title */}
          <div className="relative">
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
            <label
              htmlFor="title"
              className="absolute text-sm font-medium text-gray-500 top-0 left-2 -translate-y-1/2 bg-white px-1"
            >
              Blog Title
            </label>
          </div>

          {/* Description */}
          <div className="relative">
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="block w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog description"
            />
            <label
              htmlFor="description"
              className="absolute text-sm font-medium text-gray-500 top-0 left-2 -translate-y-1/2 bg-white px-1"
            >
              Description
            </label>
          </div>

          {/* File Upload */}
          <div className="mt-4">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {imageError && (
              <p className="text-red-500 text-sm mt-2">{imageError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
