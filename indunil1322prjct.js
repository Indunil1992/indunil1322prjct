let AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    try {
        let data = await sqs.sendMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/KTestSQS`,
            MessageBody: "zx",
            DelaySeconds: 0
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};