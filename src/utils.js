var trim = "".trim ?
    function(string) {
        return string.trim();
    } : function(string) {
        return (string + '').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };
module.exports = {
    trim: trim
};
