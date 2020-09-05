import dotenv from 'dotenv'

export const config = {
    secrets: {
      jwt: "secrets",
    },
  dbUrl: process.env.MONGODB_URI || dotenv.config().parsed.MONGODB_URI
}