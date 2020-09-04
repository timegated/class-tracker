import dotenv from 'dotenv'

export const config = {
    secrets: {
      jwt: "secrets",
    },
  dbUrl: dotenv.config().parsed.MONGODB_URI
}