module.exports = {
    sum: function (req, res) {
        try {
            var num1 = req.query.num1;
            var num2 = req.query.num2;
            //Parseamos las variables a Number.
            var result = Number(num1)+Number(num2);

        res.status(201).send({
            operation: "Add",
            result: result
        });
        } catch (e) {
            Sentry.captureException(e); 
            console.log(e);
        }
        
    },

    substract: function (req, res) {

        var num1 = req.query.num1;
        var num2 = req.query.num2;
        //Parseamos las variables a Number.
        var result = Number(num1)-Number(num2);

        res.status(201).send({
            operation: "Substract",
            result: result

        });
    },

    multiply: function (req, res) {
        var num1 = req.query.num1;
        var num2 = req.query.num2;
        //Parseamos las variables a Number.
        var result = Number(num1)*Number(num2);

        res.status(201).send({
            operation: "Multiply",
            result: result
        });
    },

    divide: function (req, res) {

        var num1 = req.query.num1;
        var num2 = req.query.num2;
        //Parseamos las variables a Number.
        var result = Number(num1)/Number(num2);
        
        (num1>0) ? result = num1/num2 : result ="No se puede dividir entre 0";
        
        res.status(201).send({
            operation: "Divide",
            result: result
        });
    }
};
