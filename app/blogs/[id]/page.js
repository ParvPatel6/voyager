"use client"; // Ensures this is a client-side component using React hooks

import { useState, useEffect } from "react";
import { use } from "react"; // Import React's `use` hook

const BlogDetails = ({ params }) => {
  // Unwrap `params` properly
  const { id } = use(params); // Use React.use() to unwrap the promise

  // State to store the blog details
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  // Fetch blog details by ID
  const fetchBlog = async (id) => {
    try {
      const response = await fetch(`/api/blog?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data); // Update state with fetched data
      } else {
        console.error("Blog not found");
        setError("Blog not found");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError("Failed to load blog");
    }
  };

  // Fetch the blog details when the component mounts or when the ID changes
  useEffect(() => {
    if (id) fetchBlog(id);
  }, [id]);

  // If there's an error or blog is still loading, show appropriate messages
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>By {blog.author}</p>
      <img src={blog.img} alt={blog.title} />
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
