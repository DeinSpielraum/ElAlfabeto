const randomize = require('../lib/randomize');

const uttterances = [
  'Vale. Vamos a aprender el alfabeto en español a través de cuatro actividades.  En la primera actividad vas a escuchar el alfabeto.  En la segunda actividad vas a repetir las letras conmigo.  En la tercera actividad vas a escuchar nombres de personas en castellano con cada letra.  Y en la última actividad vas a repetir nombres de personas conmigo. ¿De acuerdo?',
  'Muy bien. Vamos a aprender el alfabeto en español a través de cuatro actividades.  En la primera actividad vas a escuchar el alfabeto.  En la segunda actividad vas a repetir las letras conmigo.  En la tercera actividad vas a escuchar nombres de personas en castellano con cada letra.  Y en la última actividad vas a repetir nombres de personas conmigo. ¿Vale?',
  'De acuerdo. Vamos a aprender el alfabeto en español a través de cuatro actividades.  En la primera actividad vas a escuchar el alfabeto.  En la segunda actividad vas a repetir las letras conmigo.  En la tercera actividad vas a escuchar nombres de personas en castellano con cada letra.  Y en la última actividad vas a repetir nombres de personas conmigo. ¿Vale?'
];

const repromtUtterance = [
  '¿De acuerdo?',
  '¿Vale?'
];

const cardTitle = 'Explicación por Alfabeto con MiKarmen';

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ExplanationIntent';
  },
  handle(handlerInput) {
    const speechText = randomize(uttterances);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(randomize(repromtUtterance))
      .withSimpleCard(cardTitle, speechText)
      .getResponse();
  },
};
