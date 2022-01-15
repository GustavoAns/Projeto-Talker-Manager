const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const { id } = req.params;
  const numbeerid = +id;
  const talkers = await fs.readFile('./talker.json').then((e) => JSON.parse(e));
  const talkersNoId = talkers.filter((talker) => talker.id !== +id);
  talkersNoId.push({ name, age, id: numbeerid, talk: { watchedAt, rate } });
  await fs.writeFile('./talker.json', JSON.stringify(talkersNoId));
  return res.status(200).json({ name, age, id: numbeerid, talk: { watchedAt, rate } });
};