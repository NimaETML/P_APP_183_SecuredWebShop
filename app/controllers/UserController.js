const usersdata = require('../mock/mock_user'); // import du mock des users

module.exports = {
    get: (req, res) => {
        res.send(usersdata);
    }
};