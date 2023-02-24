const { Employee } = require('../lib');

let id = 10;
let name = "Jacob";
let email = "j@test.com";
let e = new Employee(name,id,email);

test('Testing getId', () => expect(e.getId()).toBe(id));
test('Testing getName', () => expect(e.getName()).toBe(name));
test('Testing getEmail', () => expect(e.getEmail()).toBe(email));
test('Testing for object', () => expect(typeof(e)).toBe('object'));
test('Testing getRole' , () => expect(e.getRole()).toBe('Employee'));