const randomize = require('../lib/randomize');

const welcomeUtterances = [
  '¡Hola! ¡Bienvenido al Alfabeto con MiKarmen! Puedo explicarte cómo vamos a aprender el alfabeto o podemos empezar directamente a practicar. ¿Qué quieres hacer? ¿Escuchar la explicación o empezar a practicar?',
  '¡Hola! ¡Gracias por aprender el Alfabeto con MiKarmen! Puedo explicarte cómo vamos a aprender el alfabeto o podemos empezar directamente a practicar. ¿Qué quieres hacer? ¿Escuchar la explicación o empezar a practicar?'
];

const repromtUtterance = [
  '¿Escuchar la explicación o empezar a practicar?',
  '¿Qué quieres hacer? ¿Escuchar la explicación o empezar a practicar?'
];

const cardTitle = '¡Bienvenido al Alfabeto con MiKarmen!';

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = randomize(welcomeUtterances);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(randomize(repromtUtterance))
      .withSimpleCard(cardTitle, speechText)
      .getResponse();
  },
};
