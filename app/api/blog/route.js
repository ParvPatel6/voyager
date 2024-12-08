import { addBlog, fetchBlogs, fetchBlogById } from "../blogFunction.js";

export async function POST(req) {
  try {
    const body = await req.json();
    const { author, title, description, image } = body;

    if (!author || !title || !description || !image) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const blogId = await addBlog({ author, title, description, image });
    return new Response(
      JSON.stringify({ message: "Blog created", id: blogId }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const blog = await fetchBlogById(id);
      if (!blog)
        return new Response(JSON.stringify({ message: "Blog not found" }), {
          status: 404,
        });
      return new Response(JSON.stringify(blog), { status: 200 });
    }

    const blogs = await fetchBlogs();
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
