/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-03 08:55:20
 * @modify date 2018-06-03 08:55:20
 * @desc A service for reply message via Line Messaging API.
*/
const request = require('request');
const lineAPI = require('../../config/config');
const apiToken = '';
const apiRoute = '';
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