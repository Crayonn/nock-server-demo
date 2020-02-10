module.exports = {
    'post /b': {
        b: 'b'
    },
    'put /c': {
        c: 'c'
    },
    'get /mock': function(req, res) {
        res.json({"number": 21});
    }
};
