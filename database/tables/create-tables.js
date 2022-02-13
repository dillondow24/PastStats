const AWS = require("aws-sdk");
const config = require("../config/aws-config.js")

AWS.config.update(config.aws_local_config);

const dynamodb = new AWS.DynamoDB();

// import table setup
const createTables = async () => {
    const UsersTable = require("./users/index.js");

    console.log('Starting to create tables')
    
    await UsersTable.createTable(dynamodb)
    
    console.log('Finished creating tables')
}

createTables()