import * as fs from "fs"

const proverbs = JSON.parse(fs.readFileSync("./proverbs.json", "utf8"))
const size = Object.keys(proverbs).length

export const getTodaysProverb = (): string => {
  const dayOfYear = getDayOfYear()
  const index = Math.floor(dayOfYear % size)
  const proverb = proverbs[index]

  if (proverb == null) {
    throw new Error("Invalid proverb in database for day of the year " + dayOfYear)
  }

  return proverb
}

export const getRandomProverb = (): string => {
  return proverbs[Math.floor(Math.random() * proverbs.length)]
}

const getDayOfYear = (): number => {
  const now = new Date();
  const diff = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 0);
  return diff / 24 / 60 / 60 / 1000;
}