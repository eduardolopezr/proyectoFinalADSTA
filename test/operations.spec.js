const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.use(chaiHttp);

describe("Operations test", () => {

    var num1 = 20;
    var num2 = 10;
    
    it("Should add", (done) => {

        chai.request(server).get("/operations/sum?num1="+ num1 + "&num2=" + num2).then((operations) => {
            var result = num1+num2;
            operations.body.result.should.eql(result);
            done();
        });
    });

    it("Should substract", (done) => {

        chai.request(server).get("/operations/substract?num1="+ num1 + "&num2=" + num2).then((operations) => {
            var result = num1-num2;
            operations.body.result.should.eql(result);
            done();
        });
    });
    it("Should multiply", (done) => {

        chai.request(server).get("/operations/multiply?num1="+ num1 + "&num2=" + num2).then((operations) => {
            var result = num1*num2;
            operations.body.result.should.eql(result);
            done();
        });
    });
    it("Should divide", (done) => {

        chai.request(server).get("/operations/divide?num1="+ num1 + "&num2=" + num2).then((operations) => {
            var result = num1/num2;
            operations.body.result.should.eql(result);
            done();
        });
    });
});
