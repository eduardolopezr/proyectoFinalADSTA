module.exports = {
    sum: function (req, res) {
        try {
            var num1 = req.query.num1;
            var num2 = req.query.num2;
            //Parseamos las variables a Number
            var result = Number(num1)+Number(num2);

            res.status(201).send({
                operation: "Add",
                result: result
            });
        } catch (e) {
            Sentry.captureException(e); 
            Sentry.captureMessage("Something went wrong");
        }
        
    },

    substract: function (req, res) {
        try {
            var num1 = req.query.num1;
            var num2 = req.query.num2;
            //Parseamos las variables a Number.
            var result = Number(num1)-Number(num2);
        } catch (e) {
            Sentry.captureException(e);
            Sentry.captureMessage("Something went wrong");
        }
        

        res.status(201).send({
            operation: "Substract",
            result: result

        });
    },

    multiply: function (req, res) {
        try {
            var num1 = req.query.num1;
            var num2 = req.query.num2;
            //Parseamos las variables a Number.
            var result = Number(num1)*Number(num2);
    
            res.status(201).send({
                operation: "Multiply",
                result: result
            });
        } catch (e) {
            Sentry.captureException(e);
            Sentry.captureMessage("Something went wrong");
        }
        
    },

    divide: function (req, res) {
        try {
            var num1 = req.query.num1;
            var num2 = req.query.num2;
            //Parseamos las variables a Number.
            var result = Number(num1)/Number(num2);
            
            (num1>0) ? result = num1/num2 : result ="No se puede dividir entre 0";
            
            res.status(201).send({
                operation: "Divide",
                result: result
            });
        } catch (e) {
            Sentry.captureException(e);
            Sentry.captureMessage("Something went wrong");
        }

        
    }
};
