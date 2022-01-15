const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const talkers = await fs.readFile('./talker.json').then((e) => JSON.parse(e));
  const id = talkers.length + 1;
  talkers.push({ name, age, id, talk: { watchedAt, rate } });
  await fs.writeFile('./talker.json', JSON.stringify(talkers));
  return res.status(201).json({ name, age, id, talk: { watchedAt, rate } });
};