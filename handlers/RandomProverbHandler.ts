import { RequestHandler, HandlerInput, getIntentName, getRequestType } from "ask-sdk"
import { Response } from "ask-sdk-model"
import { getRandomProverb, getTodaysProverb } from "../utilities/proverb-utilities"

export const randomProverbHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    const requestEnvelope = handlerInput.requestEnvelope
    return getIntentName(requestEnvelope) === "RandomProverbIntent"
  },
  handle(handlerInput: HandlerInput): Response {
    const speechText = getRandomProverb()

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(speechText, "Komm morgen für das nächste Sprichwort wieder oder frage \"Alexa, sag mir ein zufälliges Sprichwort\".")
      .getResponse()
  },
}
