const Feed = require("../models/Feed");

exports.getFeed = async (req, res) => {
  try {
    const feeds = await Feed.find().sort({ date: -1 });
    res.json(feeds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFeed = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeed = new Feed({ name, email, message });
    await newFeed.save();
    res.json({ success: true, message: "Feedback submitted! " });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


