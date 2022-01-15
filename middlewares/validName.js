module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name && name.length >= 3) {
    next();
  } else {
    if (name === undefined) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
};