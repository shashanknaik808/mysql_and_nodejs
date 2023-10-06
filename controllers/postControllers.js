const Post = require("../models/Post.js");

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts, _] = await Post.findAll();

        res.status(200).json({ count: posts.length, posts });
    } catch (error) {
        next(error);
    }
};