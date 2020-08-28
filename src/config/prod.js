export const config = {
    secrets: {
      jwt: "secrets",
    },
  dbUrl: `mongodb+srv://cheuser:${process.env.DB_PW}@cluster0-g64dw.mongodb.net/class-tracker?retryWrites=true&w=majority`, 
}