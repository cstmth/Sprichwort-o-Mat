import { SkillBuilders } from "ask-sdk-core"
import { errorHandler } from "./handlers/ErrorHandler"
import { todaysProverbHandler } from "./handlers/TodaysProverbHandler"

SkillBuilders.custom()
  .addRequestHandlers(
    todaysProverbHandler
  )
  .addErrorHandlers(
    errorHandler
  )
  .create()
