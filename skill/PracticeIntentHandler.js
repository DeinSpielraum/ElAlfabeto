const randomize = require('../lib/randomize');
const pickNext = require('../lib/pick-next');
const p = require('../lib/p');

const utterances = {
  intro: 'Actividad uno. Escucha atentamente las letras del alfabeto español.',
  letters: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  reprompt: ['¿Quieres que vuelva a leerlas?'],
  success: 'Right answer!',
  failure: 'Wrong answer, please repeat.',
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

    const { slots = {} } = handlerInput.requestEnvelope.request.intent;
    const { letter: spokenLetter } = slots;

    let outputUtterances = [];

    // initial invocation
    if (state !== states.PRACTICE_1) {
      outputUtterances.push(utterances.intro);
      currentLetter = pickNext(utterances.letters, currentLetter);
    } else

    // check letter matching
    if(currentLetter && spokenLetter.value) {
      if (spokenLetter.value === currentLetter) {
        outputUtterances.push(utterances.success);
        currentLetter = pickNext(utterances.letters, currentLetter);
      } else {
        outputUtterances.push(utterances.failure);
      }
    }

    outputUtterances.push(currentLetter);

    attributesManager.setSessionAttributes({
      ...attributesManager.getSessionAttributes(),
      state: states.PRACTICE_1,
      currentLetter,
    });

    const speechText = outputUtterances.map(p).join('');

    return handlerInput.responseBuilder
      .speak(speechText)
      .addElicitSlotDirective('letter')
      .reprompt(randomize(utterances.reprompt))
      .withSimpleCard(cardTitle, speechText)
      .getResponse();
  },
};
