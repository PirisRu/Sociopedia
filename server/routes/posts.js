import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const postRoutes = express.Router();

/* READ */
postRoutes.get("/", verifyToken, getFeedPosts);
postRoutes.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
postRoutes.patch("/:id/like", verifyToken, likePost);

export default postRoutes;
