// - - - - - - - - - - - - - - - - - - - - - - - - - LINE section - - - - - - - - - - - - - - - - - - - - - - - - -

/*
    ERROR LOG !!
    offline: Failure: Request failed with status code 400
    Error: Request failed with status code 400

    HTTPError: Request failed with status code 400
        at HTTPClient.wrapError (.../node_modules/@line/bot-sdk/dist/http.js:89:20)
        at ...node_modules/@line/bot-sdk/dist/http.js:19:88
        at processTicksAndRejections (internal/process/task_queues.js:95:5)
        at async HTTPClient.post (.../node_modules/@line/bot-sdk/dist/http.js:33:21)
*/

/*
    SAME PROBLEM !!
    1.  client.replyMessage Bad Request 400 
        https://www.line-community.me/en/question/5f0dfabe851f74ab9c18ff17/clientreplymessage-bad-request-400

    2.  Problems with axios when using http proxy #113
        https://github.com/line/line-bot-sdk-nodejs/issues/113
*/

// - - - - - - - - - - - - - - - - - - - - - - - - - LINE section - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - LINE section - - - - - - - - - - - - - - - - - - - - - - - - -

// env
import dotenv from "dotenv";
dotenv.config();

// line
import { Client } from "@line/bot-sdk";
const config = {
  channelAccessToken: process.env.ACCESS_TOKEN,
  channelSecret: process.env.SECRET_TOKEN,
};
const c = new Client(config);
console.log('line !!! ', c);

// - - - - - - - - - - - - - - - - - - - - - - - - - LINE section - - - - - - - - - - - - - - - - - - - - - - - - -

const userDetailHandler = async (
  event: any
): Promise<any> => {
  console.log("userDetailHandler START");

  // vertify web line -> return status: 200
  if (JSON.parse(event.body).events.length === 0) {
    return generateApiMsgSuccess('ok')
  }
  
  console.log('___all_event.body -> ', JSON.parse(event.body).events[0]);
  const replyToken = JSON.parse(event.body).events[0].replyToken
  const eventType = JSON.parse(event.body).events[0].type
  const eventMessageType = JSON.parse(event.body).events[0].message.type
  const eventMessageText = JSON.parse(event.body).events[0].message.text
  let msg = []
  
  try {
    if (eventType !== 'message' || eventMessageType !== 'text') {
      return generateApiMsgError('ok');
    }
    else if (eventType == 'message' || eventMessageType == 'text') {
      switch (eventMessageText) {
        // Test
        case 'T': 
          try {
            msg = [
              { 
                type: "text", 
                text: " success 😆 !!" 
              },
            ];
            return c.replyMessage(replyToken.toString(), msg);
          } catch (error) {
            console.log("error ", error);
          }
        // Get user data
        case 'User':
          try {

            const _memberInfo: AWS.DynamoDB.DocumentClient.QueryInput = {
              TableName: MEMBER_PROGRAM_TABLE_NAME,
              KeyConditionExpression: "shopLoyaltyID = :PK and userID = :SK",
              ExpressionAttributeValues: {
                ":PK": eventMessageText,
                ":SK": eventMessageText,
                // ":userID": eventMessageText,     // msg from line
              },
            };
            const results = await dynamodbQuery(db, _memberInfo);
            console.log('results -> ', [results]);  

            msg = [
              { 
                type: "text", 
                text: results.Items
              },
            ];
            return c.replyMessage(replyToken.toString(), msg);
          } catch (error) {
            console.log("error ", error);
          }
      }
    } 

    console.log("userDetailHandler END");
    return generateApiMsgSuccess("Line Response userDetail");
  } catch (err) {
    console.log(err);
    console.log("userDetailHandler END");
    return generateApiMsgError((err as Error).message);
  }
};

export { userDetailHandler };