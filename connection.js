let mysqlConnection = mysql.createConnection({
    // Tried to put the Heroku server's credentials as the SQL Connection. Got "access denied" errors. Not sure why, but commenting these out for now anyway.
    // host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306",
    // user: "rzg6asqs9iq6v7zm",
    // password: "jjtx6ivtsusmzp3v",
    // database: "Profiles"
    host: "localhost",
    user: "root",
    password: "password",
    database: "profiles"
})

mysqlConnection.connect((error)=>{
    if(!error)
        {
            console.log("Connected!");
        } else {
            console.log("Connection failed.");
        }
})

module.exports = mysqlConnection;