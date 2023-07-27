import json
import boto3
import os


def handler(event, context):
  print('received event:')
  print(event)
  GRAPHQLENDPOINT = os.environ.get('API_MEMORA_GRAPHQLAPIENDPOINTOUTPUT')
  GRAPHQLAPIKEY = os.environ.get('API_MEMORA_GRAPHQLAPIKEYOUTPUT')
  event_bridge_client = boto3.client('events')


  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }