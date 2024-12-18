const sql = require("mssql");

const dbSettings = {
  user: process.env.USER,
  password: process.env.PASSWRD,
  server: "localhost",
  database: process.env.DB,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// const getConnection = async () => {
//   try {
//     const pool = await sql.connect(dbSettings);

//     const result = await pool.request().query("SELECT GETDATE()");
//     console.log(result);

//     return pool;
//   } catch (error) {
//     console.error(error);
//   }
// };

const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
  
    //   const result = await pool.request().query("SELECT GETDATE()");
      console.log("Conexíon correcta a la base de datos");
      return pool;

    } catch (error) {
      console.error(error);
    }
  };

module.exports = { getConnection };
