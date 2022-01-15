const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;
  const talkers = await fs.readFile('./talker.json').then((e) => JSON.parse(e));
  const talkersNoId = talkers.filter((talker) => talker.id !== +id);
  await fs.writeFile('./talker.json', JSON.stringify(talkersNoId));
  return res.status(204).json({ message: 'Talker deletado' });
};