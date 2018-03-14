'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Test',
      input: event,
    }),
  };
  var AWS = require('aws-sdk');
  var uuid = require('node-uuid');

  var s3 = new AWS.S3();

  var bucketName = 'node-sdk-sample-c5b6f04b-2a3e-4f5b-99bc-aa65f2e4cbad';
  var keyName = 'hello_world3-'  + uuid.v4() + '.txt';
  
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World2!'};

  s3.putObject(params, function(err, data) {
    if (err){
      // console.log(err)
      response.body = JSON.stringify({
        message: err
      });
      callback(null, response);}
    else{
      // console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      response.body = JSON.stringify({
        message: "Successfully uploaded data to " + bucketName + "/" + keyName
      });
      callback(null, response);}
  });


  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.bash = (event, context, callback) => {
  const execFile = require('child_process').exec;
  const child = execFile('./test.sh', (error, stdout, stderr) => {
    if (error) {
      callback(stderr);
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: stdout,
      }),
    };

    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
