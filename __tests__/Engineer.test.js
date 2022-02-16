
const Engineer = require('../lib/Engineer');

  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Allie', '01', 'alliedoe@gmail.com');
    
    expect(engineer.github) .toEqual(expect.any(String));
});



test('position of employee', () => {
    const engineer = new Engineer('Allie', '01', 'alliedoe@gmail.com');

    expect(engineer.getPosition()).toEqual("Engineer");
});