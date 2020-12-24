const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { host } = req.headers;
  const html = await fetch(`https://bank.hackclub.com/donations/start/${process.env.username}`)
    .then((r) => r.text())
    .catch(() =>
      res.status(500).send("Encountered error serving profile page")
    );
  res.send(html);
};