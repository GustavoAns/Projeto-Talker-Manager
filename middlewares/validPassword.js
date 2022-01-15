module.exports = (req, res, next) => {
  const { password } = req.body;
  if (password && password.length >= 6) {
    next();
  } else {
    if (password === undefined) {
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
};