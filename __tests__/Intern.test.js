const Intern = require('../lib/Intern');

test('create an Intern object', () => {
    const intern = new Intern('Sam', 2022, 'sam.demarco@gmail', 'Carleton');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Sam', 2022, 'sam.demarco@gmail', 'Carleton');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Sam', 2022, 'sam.demarco@gmail.com', 'Carleton');

    expect(intern.getRole()).toEqual("Intern");
}); 