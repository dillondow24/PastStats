const AWS = require("aws-sdk");
const config = require("../config/aws-config.js")

AWS.config.update(config.aws_local_config);

const docClient = new AWS.DynamoDB.DocumentClient();


/**
 * populate tables with dummy data
 *
 */
const populateTables = async () => {
    const UsersTable = require("./users/index.js");
    
    console.log('Starting to load dummy data')
    
    await UsersTable.loadDummyData(docClient)
    
    console.log('Finished loading dummy data')
}

populateTables()