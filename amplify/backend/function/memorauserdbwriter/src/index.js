// /* Amplify Params - DO NOT EDIT
// 	ENV
// 	REGION
// 	AUTH_MEMORA2FC1B4522FC1B452_USERPOOLID
// 	API_MEMORA_GRAPHQLAPIIDOUTPUT
// 	API_MEMORA_GRAPHQLAPIENDPOINTOUTPUT
// 	API_MEMORA_GRAPHQLAPIKEYOUTPUT
// 	USER_TABLE
// Amplify Params - DO NOT EDIT */

import { DynamoDB } from "aws-sdk";
var db = new DynamoDB();

const USER_TABLE = process.env.USER_TABLE;

export async function handler(event, context) {
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
      TableName: USER_TABLE,
    };

    try {
      await db.putItem(params).promise();
      console.log("success");
    } catch (err) {
      throw new Error(err);
    }

    console.log("Everything executed successfully");
    context.done(null, event);
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify("Something went wrong!"),
    };
  }
}
