const { postUserC } = require('../controllers/createUsersC');

const postUserH = async(req, res) => {
    postUserC(req)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(500).json(error.message));
}

module.exports = {
    postUserH
}
