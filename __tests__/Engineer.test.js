const { Engineer } = require('../lib');

let id = 10;
let name = "Jacob";
let email = "j@test.com";
let github = "jacobHub";

let e = new Engineer(name,id,email,github);

test('Testing getGithub' , () => expect(e.getGithub()).toBe(github));
test('Testing getRole' , () => expect(e.getRole()).toBe('Engineer'));