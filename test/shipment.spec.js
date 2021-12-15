const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.use(chaiHttp);

describe("Shipment test", () => {

    it("Should create shipment data", (done) => {
        chai.request(server).get("/shipment/createShipment").then((shipment) => {
            shipment.body.data.should.not.eql(undefined);
            done();
        });
    });
    it("Should return a random direction", (done) => {
        chai.request(server).get("/shipment/changestatus").then((shipment) => {
            shipment.body.data.should.not.eql(undefined);
            done();
        });
    });
});
