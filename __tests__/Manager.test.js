const { Manager } = require('../lib');

let id =10;
let name = "Sarah";
let email = "j@osh42.com"
let officeNumber = "425";

let e = new Manager(name,id,email,officeNumber);

test('Testing getofficeNumber' , () => expect(e.getOfficeNumber()).toBe(officeNumber));
test('Testing getRole' , () => expect(e.getRole()).toBe('Manager'));