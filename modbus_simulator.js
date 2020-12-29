var ModbusRTU = require("modbus-serial");
const { random } = require("lodash");

var vector = {
  getHoldingRegister: function (addr, _unitID, callback) {
    const kilowatt1 = random(100, 1500);
    const kilowatt2 = random(200, 1400);
    const kilowatt3 = random(300, 900);
    const kilowatt4 = random(275, 1000);
    const kilowatt5 = random(450, 800);

    const kilowatthour1 = random(600, 9000);
    const kilowatthour2 = random(800, 7500);
    const kilowatthour3 = random(800, 7500);
    const kilowatthour4 = random(800, 7500);
    const kilowatthour5 = random(800, 7500);

    const kva1 = random(40, 150);
    const kva2 = random(60, 120);
    const kva3 = random(60, 120);
    const kva4 = random(60, 120);
    const kva5 = random(60, 120);

    const voltage1 = random(2200, 2400);
    const voltage2 = random(2220, 2350);
    const voltage3 = random(2220, 2350);
    const voltage4 = random(2220, 2350);
    const voltage5 = random(2220, 2350);

    const powerFactor1 = random(10, 90);
    const powerFactor2 = random(11, 88);
    const powerFactor3 = random(11, 88);
    const powerFactor4 = random(11, 88);
    const powerFactor5 = random(11, 88);

    const mockData = [
      kilowatt1,
      kilowatt2,
      kilowatt3,
      kilowatt4,
      kilowatt5,
      kilowatthour1,
      kilowatthour2,
      kilowatthour3,
      kilowatthour4,
      kilowatthour5,
      kva1,
      kva2,
      kva3,
      kva4,
      kva5,
      voltage1,
      voltage2,
      voltage3,
      voltage4,
      voltage5,
      powerFactor1,
      powerFactor2,
      powerFactor3,
      powerFactor4,
      powerFactor5,
    ];

    callback(null, mockData[addr]);
  },
};

// set the server to answer for modbus requests
console.log("ModbusTCP listening on modbus://127.0.0.1:502");
var energyMeter1 = new ModbusRTU.ServerTCP(vector, {
  host: "0.0.0.0",
  port: 8502,
  debug: true,
  unitID: 1,
});

var energyMeter2 = new ModbusRTU.ServerTCP(vector, {
  host: "0.0.0.0",
  port: 8503,
  debug: true,
  unitID: 2,
});

var energyMeter3 = new ModbusRTU.ServerTCP(vector, {
  host: "0.0.0.0",
  port: 8504,
  debug: true,
  unitID: 3,
});

var energyMeter4 = new ModbusRTU.ServerTCP(vector, {
  host: "0.0.0.0",
  port: 8505,
  debug: true,
  unitID: 4,
});

var energyMeter5 = new ModbusRTU.ServerTCP(vector, {
  host: "0.0.0.0",
  port: 8506,
  debug: true,
  unitID: 5,
});

energyMeter1.on("initialized", function () {
  console.log("EnergyMeter1 initialized");
});

energyMeter1.on("socketError", function (err) {
  console.error(err);
});

energyMeter2.on("initialized", function () {
  console.log("EnergyMeter2 initialized");
});

energyMeter2.on("socketError", function (err) {
  console.error(err);
});

energyMeter3.on("initialized", function () {
  console.log("EnergyMeter3 initialized");
});

energyMeter3.on("socketError", function (err) {
  console.error(err);
});

energyMeter4.on("initialized", function () {
  console.log("EnergyMeter4 initialized");
});

energyMeter4.on("socketError", function (err) {
  console.error(err);
});

energyMeter5.on("initialized", function () {
  console.log("EnergyMeter5 initialized");
});

energyMeter5.on("socketError", function (err) {
  console.error(err);
});
