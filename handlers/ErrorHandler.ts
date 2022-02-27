import { ErrorHandler, HandlerInput } from "ask-sdk-core"
import { Response } from "ask-sdk-model"

export const errorHandler: ErrorHandler = {
  canHandle(handlerInput: HandlerInput, error: Error): boolean {
    return true
  },
  handle(handlerInput: HandlerInput, error: Error): Response {
    console.error(error)

    return handlerInput.responseBuilder
      .speak("Bei der Bearbeitung deiner Anfrage ist ein Fehler aufgetreten. Versuche es später erneut.")
      .withSimpleCard(
        "Fehler",
        "Bei der Bearbeitung deiner Anfrage ist ein Fehler aufgetreten. Versuche es später erneut.",
      )
      .getResponse()
  },
}
