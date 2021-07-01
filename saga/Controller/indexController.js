const response = require('../response.js');

exports.index = (req, res) => {
    response.status('Hello' , res)
}
