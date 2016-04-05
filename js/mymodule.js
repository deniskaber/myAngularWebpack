/**
 * Created by Денис on 01.04.2016.
 */
var mymodule = {
    a: 5,
    log: function (str) {
        if (arguments.length) {
            console.log(str);
        } else {
            console.log(this);
        }
    }
};

module.exports = mymodule;