const Manager = require('../lib/Manager');

test('sets office number to user input', () => {
    const officeNumber = 555-555-5555;
    const testResult = new Manager('name', 'id', 'test@email.com', officeNumber);

    expect(testResult.officeNumber).toEqual(officeNumber);
});

test('getRole() returns Manager', () => {
    const role = 'Manager';
    const testResult = new Manager('name', 'id', 'test@email.com', '555-555-5555');

    expect(testResult.getRole()).toEqual(role);
});