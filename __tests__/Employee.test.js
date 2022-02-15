const Employee = require('../lib/Employee');

test('make employee object', () => {
    const employee = new Employee('Allie', 01, 'alliedoe@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Allie', 01, 'alliedoe@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee ID', () => {
    const employee = new Employee('Allie', 01, 'alliedoe@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Employee('Allie', 01, 'alliedoe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('job title', () => {
    const employee = new Employee('Allie', 01, 'alliedoe@gmail.com');

    expect(employee.getPosition()).toEqual("Employee");
}); 