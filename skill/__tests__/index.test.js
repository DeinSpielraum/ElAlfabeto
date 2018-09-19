const skill = require('../index');

describe('Skill', () => {
  it('should invoke LaunchIntent', () => {
    return expect(skill.invoke(require('../__mocks__/request.LaunchRequest.json')))
     .resolves.toMatchSnapshot();
  });

  it('should invoke PracticeIntent', () => {
    return expect(skill.invoke(require('../__mocks__/request.PracticeIntent.json')))
     .resolves.toMatchSnapshot();
  });

  it(`should invoke PracticeIntent with right answer`, () => {
    return expect(skill.invoke(require('../__mocks__/request.PracticeIntent-right_answer.json')))
     .resolves.toMatchSnapshot();
  });

  it(`should invoke PracticeIntent with wrong answer`, () => {
    return expect(skill.invoke(require('../__mocks__/request.PracticeIntent-wrong_answer.json')))
     .resolves.toMatchSnapshot();
  });
});
