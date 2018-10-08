/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-03 08:55:20
 * @modify date 2018-06-03 08:55:20
 * @desc A service for reply message via Line Messaging API.
*/
const request = require('request');
const lineAPI = require('../../config/config');
const apiToken = '+sDtl9F1rGQZKiRMomzyXbJHY9ktfzCC5OOvs4RMNqswHTjJd4RdABYr3yoQ21f53MLueTPcfSt9JpgZtekQP87g/zaKxic9TaNp9yK3ab0TdoCoI+fJIvCJnM7xBwnsHswCt0jGQSkjeo1QJbZ5wAdB04t89/1O/w1cDnyilFU=';
const apiRoute = 'https://api.line.me/v2/bot/message/reply';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiToken
};

class LineAPIService {
	constructor() {
        if (lineAPI != null && typeof lineAPI.devLineAPIConf != 'undefined') {
            this.apiToken = lineAPI.devLineAPIConf.apiToken;
            this.apiRoute = lineAPI.devLineAPIConf.apiRoute;
        }
    }
    
    reply(replyToken, messages) {
        return new Promise(function (resolve, reject) {
            try {
                let body = JSON.stringify({
                    replyToken: replyToken,
                    messages: messages
                })
                return request.post({
                    url: apiRoute,
                    headers: headers,
                    body: body
                }, (err, res, body) => {
                    console.log('status = ' + res.statusCode);
                    return resolve(res.statusCode);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}
module.exports = new LineAPIService();
