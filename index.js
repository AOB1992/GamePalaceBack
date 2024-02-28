console.log(`entrando a INDEX.JS`)
const { searchresults } = require('./src/utils/index.js');
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
console.log(`process.env es...`)
console.log(`process.env PORT`)
console.log(process.env.PORT)
console.log(`process.env COMPLETO es...`)
console.log(process.env )
const port = process.env.PORT || 3001 // 3001
console.log("PORT NO ES..-")
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log(`ENTRANDO A CONN.SYNC`)
  server.listen(port, () => {
    console.log(`ENTRANDO A  SERVER.LISTEN`)
    console.log(`servidor levantado en puerto ${port}`); // eslint-disable-line no-console
    searchresults()
  });
});
