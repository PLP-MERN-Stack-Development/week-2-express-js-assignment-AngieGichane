module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (
    typeof name === 'string' &&
    typeof description === 'string' &&
    typeof price === 'number' &&
    typeof category === 'string' &&
    typeof inStock === 'boolean'
  ) {
    return next();
  }
  res.status(400).json({ error: 'Invalid product data' });
};
