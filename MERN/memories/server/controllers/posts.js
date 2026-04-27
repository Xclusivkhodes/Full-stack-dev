import PostMessage from "../models/postMessage.js";
import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json(`There was an error: ${err.message}`);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json(`There was an error: ${err.message}`);
  }
};
