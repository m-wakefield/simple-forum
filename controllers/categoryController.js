const Category = require('../models/Category');

// GET all caregiving categories
exports.getCategories = async (req, res) => {
  try {
    console.log("📡 GET /categories hit");
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.error("❌ GET /categories failed:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// POST a new caregiving category
exports.addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).json({ message: 'Category name is required' });
  }

  try {
    const existing = await Category.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    console.error("❌ POST /categories failed:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
