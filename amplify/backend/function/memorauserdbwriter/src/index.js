/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	AUTH_MEMORA2FC1B4522FC1B452_USERPOOLID
	API_MEMORA_GRAPHQLAPIIDOUTPUT
	API_MEMORA_GRAPHQLAPIENDPOINTOUTPUT
	API_MEMORA_GRAPHQLAPIKEYOUTPUT
	USER_TABLE
Amplify Params - DO NOT EDIT */

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
const client = new DynamoDBClient();
const USER_TABLE = process.env.USER_TABLE;

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  let date = new Date();

  if (event.request.userAttributes.sub) {
    const user = event.request.userAttributes;
    let params = {
      Item: {
        id: { S: user.sub },
        __typename: { S: "User" },
        given_name: { S: user.name },
        email: { S: user.email },
        avatar: { S: "" },
        slug: { S: user.name.substring(0, 1) },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      ReturnConsumedCapacity: "TOTAL",
      TableName: USER_TABLE,
    };

    try {
      const command = new PutItemCommand(params);
      const result = await client.send(command);
      console.log("RESULT: ", result);
      context.done(null, event);
    } catch (err) {
      throw new Error(err);
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify("User Information not present correctly."),
    };
  }
};
