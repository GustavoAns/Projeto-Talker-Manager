module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.length === 16) {
    next();
  } else {
    if (authorization === undefined) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    return res.status(401).json({ message: 'Token inválido' });
  }
};