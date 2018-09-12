const Alexa = require('ask-sdk-core');

const CancelAndStopIntentHandler = require('./CancelAndStopIntentHandler');
const ExplanationIntentHandler = require('./ExplanationIntentHandler');
const HelpIntentHandler = require('./HelpIntentHandler');
const LaunchRequestHandler = require('./LaunchRequestHandler');
const PracticeIntentHandler = require('./PracticeIntentHandler');
const SessionEndedRequestHandler = require('./SessionEndedRequestHandler');

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.error(error);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

module.exports = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    CancelAndStopIntentHandler,
    ExplanationIntentHandler,
    HelpIntentHandler,
    LaunchRequestHandler,
    PracticeIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .create();
