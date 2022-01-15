module.exports = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const validData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  if (!watchedAt) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (validData.test(watchedAt)) {
    next();
  } else {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
};