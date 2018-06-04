/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-04 09:48:04
 * @modify date 2018-06-04 09:48:04
 * @desc This file used to be a Main Configuration file which will collect all configuration
 * Example. Database Configuration etc.
*/
const fs = require('fs-extra'),
    path = require('path'),
    devConf = fs.readJSONSync(path.resolve(__dirname, 'config.development.json'), { throws: false });

module.exports = {
    devConf: (devConf && devConf.database) ? devConf.database : null,
    devLineAPIConf: (devConf && devConf.lineAPI) ? devConf.lineAPI : null
};