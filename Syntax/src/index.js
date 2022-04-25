// const EntityBase = require("./entityBase");
//
// const male = new EntityBase({
// name: "Alpha Vylly",
// gender: "male",
// }).name;
//
// const female = new EntityBase({
// name: "Xuxa da Silva",
// gender: "female",
// }).name;
//
// console.log(male);
// console.log(female);

const assert = require("assert");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const Employee = require("./employee");
const Manager = require("./manager");
const Util = require("./util");

const GENDER = {
  male: "male",
  female: "female",
};

{
  const employee = new Employee({
    name: "Xuxa da Silva",
    gender: GENDER.female,
  });

  assert.throws(() => employee.birthYear, {
    message: "You must define age first!!",
  });
}

const CURRENT_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
  const employee = new Employee({
    name: "João Guilherme",
    age: 20,
    gender: GENDER.male,
  });

  assert.deepStrictEqual(employee.name, "Mr. João Guilherme");
  assert.deepStrictEqual(employee.age, undefined);
  assert.deepStrictEqual(employee.gender, undefined);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

  const expectedBirthYear = 2001;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  // Haven't set, not change!!
  employee.birthYear = new Date().getFullYear() - 80;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  employee.age = 80;
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log("\n -------Employee------- ");
  console.log("employee.name: ", employee.name);
  console.log("employee.age: ", employee.age);
  console.log("employee.gende: ", employee.gender);
  console.log("employee.grossPay: ", employee.grossPay);
  console.log("employee.netPay: ", employee.netPay);
}

{
  const manager = new Manager({
    name: "Maria Eduarda",
    age: 18,
    gender: GENDER.female,
  });

  assert.deepStrictEqual(manager.name, "Ms. Maria Eduarda");
  assert.deepStrictEqual(manager.age, undefined);
  assert.deepStrictEqual(manager.gender, undefined);
  assert.deepStrictEqual(manager.birthYear, 2003);
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

  console.log("\n -------Manager------- ");
  console.log("manager.name: ", manager.name);
  console.log("manager.age: ", manager.age);
  console.log("manager.gende: ", manager.gender);
  console.log("manager.birthYear: ", manager.birthYear);
  console.log("manager.grossPay: ", manager.grossPay);
  console.log("manager:bonuses: ", manager.bonuses);
  console.log("manager.netPay: ", manager.netPay);
}
