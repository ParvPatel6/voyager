const express = require("express");
const router = express.Router();
const { db } = require("../_utils/firebase"); // Import your database connection

// Endpoint to search blogs by place
router.get("/", async (req, res) => {
  try {
    const query = req.query.query; // Get the search query from URL params

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Example query to search blogs by "place" field
    const searchResults = await db
      .collection("blogs")
      .where("place", ">=", query)
      .where("place", "<=", query + "\uf8ff") // Allows partial matching
      .get();

    // Format the result
    const blogs = searchResults.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ message: "Failed to fetch search results" });
  }
});

module.exports = router;
