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
  html = html.replace("<head>", '<head><meta charset="UTF-8">');
  if (process.env.metaimage) {
    html = html.replace(
      /https:\/\/workshop-cards.hackclub.com\/(.*)brand=Bank/g,
      process.env.metaimage
    );
  }
  if (process.env.description) {
    html = html.replace(
      /description" c(.*)">/g,
      `description" content="${process.env.description}">`
    );
  }
  if (process.env.title) {
    html = html.replace(
      /:title(.*)">/g,
      `:title" content="${process.env.title}">`
    );
    html = html
      .replace(/(\r\n|\n|\r)/gm, " ")
      .replace(/title>(.*)title>/g, `title>${process.env.title}</title>`);
  }

  res.send(html);
};
