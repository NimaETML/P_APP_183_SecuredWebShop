const usersdata = require('../mock/mock_user');

module.exports = {
    get: (req, res) => {
        res.send(usersdata);
    }
};