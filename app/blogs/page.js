"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // Set empty array on error
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <Link
        href="/blogs/new-blog"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 24px",
          backgroundColor: "#334155",
          color: "#000000",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          textDecoration: "none",
          transition: "all 0.3s ease",
          fontSize: "16px",
          fontWeight: "500",
          hover: "bg-blend-darken",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Add New Blog
      </Link>

      <ul>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <li key={blog.id} className="w-full mb-6">
              <Link
                href={`/blogs/${blog.id}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex h-48">
                  <div className="w-[35%] h-full bg-gray-200"></div>
                  <div className="w-[65%] p-4 flex flex-col justify-between">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600">By {blog.author}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </ul>
    </div>
  );
};

export default BlogsPage;
