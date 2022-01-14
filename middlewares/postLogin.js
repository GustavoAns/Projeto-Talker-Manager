const crypto = require('crypto');

module.exports = (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  console.log(token);
  console.log(`token : ${token.length}`);
  res.status(200).json({ token });
};
