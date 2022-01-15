const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { q } = req.query;
  console.log(q);
  const talkers = await fs.readFile('./talker.json').then((e) => JSON.parse(e));
  if (!q) {
    return res.status(200).json(talkers);
  }
  console.log(q);
  const talkersNoQ = talkers.filter((talker) => talker.name.includes(q));
  await fs.writeFile('./talker.json', JSON.stringify(talkersNoQ));
  return res.status(200).json(talkersNoQ);
};