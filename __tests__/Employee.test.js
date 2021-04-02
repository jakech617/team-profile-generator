const Employee = require('../lib/Employee');

test('sets employee name to user input', () => {
    const name = 'Jake';
    const testResult = new Employee(name);

    expect(testResult.name).toEqual(name);
});

test('sets id to user input', () => {
    const id = 1;
    const testResult = new Employee('Jake', id);

    expect(testResult.id).toEqual(id);
});

test('sets id to user input', () => {
    const id = 1;
    const testResult = new Employee('Jake', id);

    expect(testResult.id).toEqual(id);
});

test('sets email to user input', () => {
    const email = 'test@email.com';
    const testResult = new Employee('Jake', 1, email);

    expect(testResult.email).toEqual(email);
});