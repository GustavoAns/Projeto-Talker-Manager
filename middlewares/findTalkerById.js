const fs = require('fs').promises;

module.exports = async (req, res) => {
const { id } = req.params;
const talkers = await fs.readFile('./talker.json').then((e) => JSON.parse(e));
const findtalker = talkers.find((talker) => talker.id === +id);
if (findtalker) { return res.status(200).json(findtalker); }
if (!findtalker) { return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); }
};
