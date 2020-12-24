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
  if (process.env.meta_image) {
    html = html.replace(
      /https:\/\/workshop-cards.hackclub.com\/(.*)brand=Bank/g,
      process.env.meta_image
    );
  }
  if (process.env.description) {
    html = html.replace(
      /description" c(.*)">/g,
      `description" content="${process.env.description}">`
    );
  }
  if (process.env.site_name) {
    console.log(html);
    html = html.replace(
      /site_name(.*)>/g,
      `site_name" content="${process.env.site_name}">`
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

  if (process.env.custom_css) {
    html = html.replace('<head>',
      `<head><link rel="stylesheet" media="all" href="${process.env.custom_css}" data-turbolinks-track="reload">`
    );
    html = html
      .replace(/(\r\n|\n|\r)/gm, " ")
      .replace(/title>(.*)title>/g, `title>${process.env.title}</title>`);
  }

  res.send(html);
};
