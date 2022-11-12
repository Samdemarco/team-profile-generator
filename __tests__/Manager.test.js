
const Manager = require('../lib/Manager');

test('create a Manager object', () => {
    const manager = new Manager('Sam', 2022, 'sam.demarco@gmail', 101);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Sam', 2022, 'sam.demarco@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 