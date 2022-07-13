require("dotenv").config();

const PORT = +process.env.PORT || 3001;
function getDatabaseUri() {
  return (
    process.env.DATABASE_URL ||
    "postgres://postgres:postgresql@localhost:5432/JobApp"
  );
}
const SECRET_KEY = process.env.SECRET_KEY || "its-secret-key";

module.exports = {
  PORT,
  SECRET_KEY,
  getDatabaseUri,
};
