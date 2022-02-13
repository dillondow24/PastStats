const AWS = require("aws-sdk");
const config = require("../config/aws-config.js")

AWS.config.update(config.aws_local_config);

const dynamodb = new AWS.DynamoDB();

/**
 * delete database tables
 *
 */
const deleteTables = async () => {
    const UsersTable = require("./users/index.js");
    
    console.log('Starting to delete tables')
    
    await UsersTable.deleteTable(dynamodb)
    
    console.log('Finished deleting tables')
}

deleteTables()