### How to make search using "contains" with DynamoDB
- https://stackoverflow.com/questions/43793888/how-to-make-search-using-contains-with-dynamodb?fbclid=IwAR2u5GyTz_SvFnEPue45RAgDbsNSOkhfncjwtD_wDbueRPT3jn3GlgFxywY
```Javascript
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
```

<p align="center"></br><h6 align="center"> o </h6></p>

### scan\query between two timestamps
- https://stackoverflow.com/questions/35828968/scan-query-between-two-timestamps
```Javascript
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
```
