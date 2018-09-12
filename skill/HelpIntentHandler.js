const randomize = require('../lib/randomize');

const utterances = [
  'Con El Alfabeto con Mikarmen aprendes las letras en español. Si no entiendes la explicación oral de las actividades, por favor, lee los pasos a seguir en la descripción del esquil. ¿Quieres pasar a la actividad uno?',
];

const repromtUtterance = [
  '¿Escuchar la explicación o empezar a practicar?',
  '¿Qué quieres hacer? ¿Escuchar la explicación o empezar a practicar?'
];

const cardTitle = '¡Bienvenido al Alfabeto con MiKarmen!';

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = randomize(utterances);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(randomize(repromtUtterance))
      .withSimpleCard(cardTitle, speechText)
      .getResponse();
  },
};
