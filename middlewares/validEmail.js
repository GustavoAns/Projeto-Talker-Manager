module.exports = (req, res, next) => {
  const { email } = req.body;
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (validEmail.test(email)) {
    next();
  } else {
    if (email === undefined) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
};