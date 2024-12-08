import { db } from "../_utils/firebase"; // Adjust path to your firebase.js
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

const BLOGS_COLLECTION = "blogs";

// Add a new blog
export async function addBlog({ author, title, description, image }) {
  const blogRef = collection(db, BLOGS_COLLECTION);
  const docRef = await addDoc(blogRef, {
    author,
    title,
    description,
    image,
    createdAt: new Date(),
  });
  return docRef.id;
}

// Fetch all blogs
export async function fetchBlogs() {
  const blogRef = collection(db, BLOGS_COLLECTION);
  const querySnapshot = await getDocs(blogRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Fetch a single blog by ID
export async function fetchBlogById(id) {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null; // Blog not found
  }
}
