module.exports = {
    sum: function (req, res) {

        var num1 = req.query("num1");
        var num2 = req.query("num2");

        var result = num1+num2;

        res.status(201).send({
            operation: "Add",
            result: result
        });
    },

    substract: function (req, res) {

        var num1 = req.query("num1");
        var num2 = req.query("num2");

        var result = num1-num2;

        res.status(201).send({
            operation: "Substract",
            result: result

        });
    },

    multiply: function (req, res) {
        var num1 = req.query("num1");
        var num2 = req.query("num2");

        var result = num1*num2;

        res.status(201).send({
            operation: "Multiply",
            result: result
        });
    },

    divide: function (req, res) {

        var num1 = req.query("num1");
        var num2 = req.query("num2");
        
        var result;
        
        (num1>0) ? result = num1/num2 : result ="No se puede dividir entre 0";
        
        res.status(201).send({
            operation: "Divide",
            result: result
        });
    }
};
