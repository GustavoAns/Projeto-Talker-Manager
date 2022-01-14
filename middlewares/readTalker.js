const fs = require('fs').promises;

module.exports = async (req, res) => {
  const talker = await fs.readFile('./talker.json').then((e) => JSON.parse(e));
  res.status(200).json(talker);
};
