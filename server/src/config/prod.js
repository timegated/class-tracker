export const config = {
    secrets: {
      jwt: "secrets",
    },
    dbUrl: `mongodb+srv://cheuser:${process.env.DB_KEY}.mongodb.net/class-tracker?retryWrites=true&w=majority`, 
}