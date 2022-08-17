DOCUMENTATION

// ----------------------------------------
UPDATE-ITEM 
    -ASDASDASD -ASDASDASD
// ----------------------------------------
NAME-NAME  
    -ASDASDASD -ASDASDASD
// ----------------------------------------
NAME-NAME
    -ASDASDASD -ASDASDASD
// ----------------------------------------

// ---------------------------------------- ---------------------------------------- ----------------------------------------

UPDATE-ITEM 

https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html

const params = {
    TableName : "Thread",
    Key : {
        ForumName : {
            "S": "Amazon DynamoDB"
        },
        Subject : {
            "S": "Maximum number of items?"
        }
    },
    UpdateExpression: "set LastPostedBy = :val1",
    ConditionExpression: "LastPostedBy = :val2",
    ExpressionAttributeValues: {
        ":val1": {"S": "alice@example.com"},
        ":val2": {"S": "fred@example.com"}
    },
    "ReturnValues": "ALL_NEW"
};

// ---------------------------------------- 

https://stackoverflow.com/questions/41915438/node-js-aws-dynamodb-updateitem

'use strict';

const aws = require('aws-sdk');

// It is recommended that we instantiate AWS clients outside the scope of the handler 
// to take advantage of connection re-use.
const docClient = new aws.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const params = {
        TableName: "MYTABLE",
        Key: {
            "id": "1"
        },
        UpdateExpression: "set variable1 = :x, #MyVariable = :y",
        ExpressionAttributeNames: {
            "#MyVariable": "variable23"
        },
        ExpressionAttributeValues: {
            ":x": "hello2",
            ":y": "dog"
        }
    };

    docClient.update(params, function(err, data) {
        if (err) console.log(err);
        else console.log(data);
    });
};

// ----------------------------------------  


// ---------------------------------------- ---------------------------------------- ----------------------------------------


NAME-NAME

// 🎧 How to make search using "contains" with DynamoDB
// 🧭 https://stackoverflow.com/questions/43793888/how-to-make-search-using-contains-with-dynamodb

const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const SEARCH_KEYWORD = "b";

let params = {
    TableName : 'TABLE_NAME',
    FilterExpression: "contains(#movie_name, :movie_name)",
    ExpressionAttributeNames: {
        "#movie_name": "movie_name",
    },
    ExpressionAttributeValues: {
        ":movie_name": SEARCH_KEYWORD,
    }       
};

documentClient.scan(params, function(err, data) {
    console.log(data);
});



// 🎧 scan\query between two timestamps
// 🧭 https://stackoverflow.com/questions/35828968/scan-query-between-two-timestamps

function getConversationByDate(req , cb) {

    var payload = req.all; //05/09/2017
    var params = {
        TableName: "message",
        IndexName: "thread_id-timestamp-index",
        KeyConditionExpression: "#mid = :mid AND #time BETWEEN :sdate AND :edate",
        ExpressionAttributeNames: {
            "#mid": "thread_id",
            "#time": "timestamp"
        },
        ExpressionAttributeValues: {
            ":mid": payload.thread_id,
            ":sdate": payload.startdate,
            ":edate": payload.enddate
        }
    };
    req.dynamo.query(params, function (err, data) {
        cb(err, data);
    });
}




// 🎧 How to scan between date range using Lambda and DynamoDB?
// 🧭 https://stackoverflow.com/questions/40390386/how-to-scan-between-date-range-using-lambda-and-dynamodb

FilterExpression: "start_date BETWEEN :date1 and :date2"




// 🎧 DynamoDB Filter Expressions (Ultimate Guide w/ Examples) and more... 
// 🧭 https://dynobase.dev/dynamodb-filterexpression/

// 🎃 EXAM - Multiple Filtering with a Filter Expression 
var params = {
    TableName: 'projects-manager',
    FilterExpression : "contains(#name, :name) AND #projectId = :projectId ",
    ExpressionAttributeNames: {"#name": "name", "#projectId":"projectId" },
    ExpressionAttributeValues: {
        ':projectId': 'ffed08f6-dc4e-4fba-a56f-ad6c80af8d01',
        ':name':"Project"
    }
};

dynamodb.scan(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
