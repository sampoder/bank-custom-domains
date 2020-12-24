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
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(error);
      });
  }
};
