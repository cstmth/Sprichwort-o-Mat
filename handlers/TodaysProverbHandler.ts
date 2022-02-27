import { RequestHandler, HandlerInput, getIntentName, getRequestType } from "ask-sdk"
import { Response } from "ask-sdk-model"
import { getTodaysProverb } from "../utilities/proverb-utilities"

export const todaysProverbHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    const requestEnvelope = handlerInput.requestEnvelope
    return getRequestType(requestEnvelope) === "LaunchRequest" || getIntentName(requestEnvelope) === "TodaysProverbIntent"
  },
  handle(handlerInput: HandlerInput): Response {
    const speechText = "Das Sprichwort des Tages lautet: " + getTodaysProverb() + "."

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(getTodaysProverb(), "Komm morgen für das nächste Sprichwort wieder oder frage \"Alexa, sag mir ein zufälliges Sprichwort\".")
      .getResponse()
  },
}
