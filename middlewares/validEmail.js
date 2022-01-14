module.exports = (req, res, next) => {
  const { email } = req.body;
  console.log('email');
  console.log(email);
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  console.log(validEmail.test(email));
  if (validEmail.test(email)) {
    next();
  } else {
    if (email === undefined) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
};