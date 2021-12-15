const path = require("path");
const PAYMENT_FILE_PATH = path.resolve("./payment-generated.txt");
const faker = require("faker");
const fs = require("fs");
const LINE_ENDING = require("os").EOL;

module.exports = {
    create: function (req, res) {
        var price = faker.commerce.price();

        //la función toma el path del txt y el flags a (append)
        var stream = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "a" });
        //Escribimos en el archivo.
        stream.write(price + LINE_ENDING);
        stream.end();

        res.status(201).send({price: price });
    },

    applyDiscount: function (req, res) {
        //debera de restar una cantidad a cada precio en payment-generated.txt
        var { qyt } = req.body;
        //Obtenemos los datos del archivo
        var data = fs.readFileSync(PAYMENT_FILE_PATH);
        var arrayOfPrices = data.toString().trim().split(LINE_ENDING);

        var jsonRes = [];
        var wTexto = "";

        //creamos nuevos datos.
        arrayOfPrices.forEach((item) => {
            var aPrecio = Number(item) - Number(qyt);
            jsonRes.push((Object.price = aPrecio));
            wTexto += aPrecio + LINE_ENDING;
        });
        
        //la función toma el path del txt y el flags w (write)
        var stream = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "w" });
        stream.write(wTexto);
        stream.end();

        res.json({ message: "Se modificó el archivo.", resData: jsonRes });
    },

    getPromos: function (req, res) {
        //Cambiamos el req por una variable para retornar como respuesta.
        var response = [
            { name: "BUENFIN" },
            { name: "HOTSALE" },
            { name: "CYBERMONDAY" },
            { name: "BLACKFRIDAY" },
            { name: "PRIMEDAY" },
        ];
        res.json(response);
    },
};