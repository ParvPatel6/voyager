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
      <button>
        <Link href="/blogs/new-blog">Add New Blog</Link>
      </button>
      <ul>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
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
