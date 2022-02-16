const Developer = require('../lib/Developer');


test('employee position', () => {
    const developer = new Developer('Allie', '01', 'alliedoe@gmail.com');

    expect(developer.getPosition()).toEqual("Developer");
}); 