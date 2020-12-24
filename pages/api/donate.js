var axios = require("axios");
var FormData = require("form-data");

module.exports = async (req, res) => {
  const { host } = req.headers;

  if (!req.body["donation[name]"]) {
    res.redirect("/");
  } else {
    var data = new FormData();
    data.append("donation[name]", req.body["donation[name]"]);
    data.append("donation[email]", req.body["donation[email]"]);
    data.append("donation[amount]", req.body["donation[amount]"]);

    var config = {
      method: "post",
      url: `https://bank.hackclub.com/donations/start/${process.env.username}`,
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let html = response.data;
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
        if (process.env.title) {
          html = html.replace(
            /:title(.*)">/g,
            `:title" content="${process.env.title}">`
          );
          html = html.replace(
            "<head>",
            `<head><title>${process.env.title}</title>`
          );
        }
        if (process.env.custom_css) {
          html = html.replace(
            "<head>",
            `<head><link rel="stylesheet" media="all" href="${process.env.custom_css}" data-turbolinks-track="reload">`
          );
        }
        res.send(html);
      })
      .catch(function (error) {
        res.send(error);
      });
  }
};
