const express = require("express");
const router = express.Router();
const { db } = require("../_utils/firebase"); // Import your database connection

// Endpoint to fetch recommended blogs
router.get("/", async (req, res) => {
  try {
    // Example query to get most-read blogs
    const recommendedBlogs = await db
      .collection("blogs")
      .orderBy("views", "desc") // Assuming "views" tracks popularity
      .limit(5)
      .get();

    // Format the result
    const blogs = recommendedBlogs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching recommended blogs:", error);
    res.status(500).json({ message: "Failed to fetch recommended blogs" });
  }
});

module.exports = router;
