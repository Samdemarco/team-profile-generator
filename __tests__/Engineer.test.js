const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
    const engineer = new Engineer('Sam', 2022, 'sam.demarco@gmail', 'Samdemarco');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Sam', 2022, 'sam.demarco@gmail', 'Samdemarco');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Sam', 2022, 'sam.demarco@gmail', 'Samdemarco');

    expect(engineer.getRole()).toEqual("Engineer");
});