const data = require('./data.js')

const TableName = 'users-table';
/**
 * Create The Movies table
 *
 * @param {*} dynamodb
 */
const createTable = async (dynamodb) => {

    var params = {
        TableName,
        KeySchema: [       
            { AttributeName: "uid", KeyType: "HASH"},  //Partition key
            // { AttributeName: "timestamp", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [       
            { AttributeName: "uid", AttributeType: "S" },
            // { AttributeName: "timestamp", AttributeType: "N" }
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    };

    await dynamodb.createTable(params, function(err, data) {
        if (err) {
            console.error(`Unable to create ${TableName} table. Error JSON:`, JSON.stringify(err, null, 2));
        } else {
            console.log(`Created ${TableName} table. Table description JSON:`, JSON.stringify(data, null, 2));
        }
    });
}

/**
 * load dummy data into this table
 *
 * @param {*} dynamodb
 * @param {*} docClient
 */
const loadDummyData = async (docClient) => {
        data.items.forEach(async (Item) => {
        console.log('Item: ', Item)

        var params = { TableName, Item };

        await docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add Item: ", Item, ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("PutItem succeeded");
            }
        });
    });
}


/**
 * Delete The Movies Table
 * @param {*} dynamodb 
 */
const deleteTable = async (dynamodb) => {
    await dynamodb.deleteTable({TableName}, function(err, data) {
    if (err) {
        console.error(`Unable to delete ${TableName} table. Error JSON:`, JSON.stringify(err, null, 2));
    } else {
        console.log(`Deleted table. ${TableName} Table description JSON:`, JSON.stringify(data, null, 2));
    }
});
}

module.exports = {
    createTable,
    loadDummyData,
    deleteTable,
}