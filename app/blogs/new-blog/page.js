"use client";
import { useState } from "react";

const NewBlog = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      author: formData.author,
      title: formData.title,
      description: formData.description,
      image: formData.image.name, // Assume image is handled elsewhere
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
        // Navigate to the blogs page
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlog;
