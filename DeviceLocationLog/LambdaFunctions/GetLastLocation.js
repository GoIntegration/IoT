'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    var result = new Object();
    result.deviceID = event.key1;
    result.lat = '12.123';
    result.long = '23.234';
    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    callback(null, result);  // Echo back the first key value
    //callback('Something went wrong');
};
