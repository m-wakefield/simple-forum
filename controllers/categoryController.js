// ...existing code...

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
    res.status(500).json({ message: 'Server error' });
  }
};
// ...existing code...