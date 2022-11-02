const { createUser } = require("../models/users.model");


exports.postUser = (req, res) => {
  const user = req.body;
  createUser(user)
    .then((authObj) => {
      res
        .status(201)
        .send({
          user: authObj.data.user.id,
          session_id: authObj.data.session.access_token,
        });
    })
    .catch(console.log);
};