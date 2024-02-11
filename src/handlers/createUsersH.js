const { createUsersC } = require('../controllers/createUsersC');

const createUsersH = async(req, res) => {
    createUsersC(req)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(500).json(error.message));
}

module.exports = {
    createUsersH
}