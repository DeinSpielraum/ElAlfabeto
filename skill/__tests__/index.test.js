const skill = require('../index');

describe('Skill', () => {
  it('should invoke LaunchIntent', () => {
    return skill.invoke(require('../__mocks__/request.LaunchRequest.json'))
    .then(responseBody => expect(responseBody).toMatchSnapshot())
  });

  it('should invoke PracticeIntent', () => {
    return skill.invoke(require('../__mocks__/request.PracticeIntent.json'))
    .then(responseBody => console.log(responseBody))
  });
});
