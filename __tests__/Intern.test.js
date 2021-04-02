const Intern = require('../lib/Intern');

test('sets school to user input', () => {
    const school = "OSU";
    const testResult = new Intern('name', 'id', 'test@email.com', school);

    expect(testResult.school).toEqual(school);
});

test('getRole() returns Intern', () => {
    const role = 'Intern';
    const testResult = new Intern('name', 'id', 'test@email.com', 'OSU');

    expect(testResult.getRole()).toEqual(role);
});