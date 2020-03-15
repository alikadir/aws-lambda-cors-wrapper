const corsWrapper = require('./corsWrapper')

const hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                env: process.env,
                input: event,
            },
            null,
            2
        ),
    };
};


module.exports.hello = corsWrapper(hello);