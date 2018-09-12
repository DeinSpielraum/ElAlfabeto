const randomize = require('../lib/randomize');
const pickNext = require('../lib/pick-next');
const p = require('../lib/p');

const utterances = {
  intro: 'Actividad uno. Escucha atentamente las letras del alfabeto español.',
  letters: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  reprompt: ['¿Quieres que vuelva a leerlas?']
};

const cardTitle = 'Actividad uno.';

const states = {
  PRACTICE_1: 'PRACTICE_1'
};

module.exports = {
  states,
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PracticeIntent';
  },
  handle(handlerInput) {
    const { attributesManager } = handlerInput;
    let { state, currentLetter } = attributesManager.getSessionAttributes();

    currentLetter = pickNext(utterances.letters, currentLetter);

    const speechText = [
      state !== states.PRACTICE_1 && utterances.intro,
      currentLetter
    ].map(p).join('');

    attributesManager.setSessionAttributes({
      ...attributesManager.getSessionAttributes(),
      state: states.PRACTICE_1,
      currentLetter,
    });

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(randomize(utterances.reprompt))
      .withSimpleCard(cardTitle, speechText)
      .getResponse();
  },
};
