const Engineer = require('../lib/Engineer');

test('sets github account to user input', () => {
    const github = 'githubtest';
    const testResult = new Engineer('name', 'id', 'test@email.com', github);

    expect(testResult.github).toEqual(github);
});

test('getRole() returns Engineer', () => {
    const role = 'Engineer';
    const testResult = new Engineer('name', 'id', 'test@email.com', 'githubtest');

    expect(testResult.getRole()).toEqual(role);
});