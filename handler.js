'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Test',
      input: event,
    }),
  };

  callback(null, response);

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
