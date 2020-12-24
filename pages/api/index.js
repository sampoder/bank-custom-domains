const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { host } = req.headers;
  let html = await fetch(
    `https://bank.hackclub.com/donations/start/${process.env.username}`
  )
    .then((r) => r.text())
    .catch(() =>
      res.status(500).send("Encountered error serving profile page")
    );
  console.log(html);
  if (process.env.metaimage) {
    html = html.replace(
      /https:\/\/workshop-cards.hackclub.com\/(.*)brand=Bank/g,
      process.env.metaimage
    );
  }
  res.send(html);
};
