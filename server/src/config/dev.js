export const config = {
  secrets: {
    jwt: "secrets",
  },
  dbUrl: 'mongodb://localhost:27017/class-tracker',
  dbOnLine:
    `mongodb+srv://cheuser:${process.env.DB_KEY}.mongodb.net/class-tracker?retryWrites=true&w=majority`,
};
