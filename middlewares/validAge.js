module.exports = (req, res, next) => {
  const { age } = req.body;
  if (age && age >= 18) {
    next();
  } else {
    if (age === undefined) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
};