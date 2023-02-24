const { Intern } = require('../lib');


let id = 10;
let name = "Jacob";
let email = "j@test.com";
let school = "jacobHub";


let e = new Intern(name,id,email,school);


test('Testing getSchool' , () => expect(e.getSchool()).toBe(school));
test('Testing getRole' , () => expect(e.getRole()).toBe('Intern'));