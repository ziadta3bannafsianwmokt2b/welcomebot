const fs = require('fs');
const path = require('path');
const { Client , GatewayIntentBits , ActivityType } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args));
}
function _0x3593(){var _0x3d8c60=['Code\x20By\x2072.20.','135740huvMRg','1624HGtVBL','Wick\x20Studio','1420vUFyIp','168031ZjvweG','2284BhzWfm','14jeaztB','13496ewLPnr','4345728syAaSf','discord.gg/wicks','2350260iJuzdH','1852998xvJjTT','7445ziteWQ','log'];_0x3593=function(){return _0x3d8c60;};return _0x3593();}function _0x2a36(_0x2e6e9d,_0x204725){var _0x359325=_0x3593();return _0x2a36=function(_0x2a36be,_0x3cb218){_0x2a36be=_0x2a36be-0x135;var _0x27d8e0=_0x359325[_0x2a36be];return _0x27d8e0;},_0x2a36(_0x2e6e9d,_0x204725);}var _0x5f744e=_0x2a36;(function(_0x2382ab,_0x5ab343){var _0x1680a2=_0x2a36,_0x4373bf=_0x2382ab();while(!![]){try{var _0x1c2649=parseInt(_0x1680a2(0x142))/0x1*(-parseInt(_0x1680a2(0x135))/0x2)+-parseInt(_0x1680a2(0x137))/0x3+-parseInt(_0x1680a2(0x143))/0x4*(-parseInt(_0x1680a2(0x13b))/0x5)+parseInt(_0x1680a2(0x13a))/0x6+-parseInt(_0x1680a2(0x13f))/0x7*(-parseInt(_0x1680a2(0x136))/0x8)+parseInt(_0x1680a2(0x139))/0x9+-parseInt(_0x1680a2(0x141))/0xa*(-parseInt(_0x1680a2(0x13e))/0xb);if(_0x1c2649===_0x5ab343)break;else _0x4373bf['push'](_0x4373bf['shift']());}catch(_0x24822f){_0x4373bf['push'](_0x4373bf['shift']());}}}(_0x3593,0xe5437),console[_0x5f744e(0x13c)](_0x5f744e(0x13d)),console[_0x5f744e(0x13c)](_0x5f744e(0x140)),console[_0x5f744e(0x13c)](_0x5f744e(0x138)));
function _0x1f23(_0xa9fc7d,_0x367b09){var _0x4e5c0a=_0x4e5c();return _0x1f23=function(_0x1f2313,_0x3402aa){_0x1f2313=_0x1f2313-0xaa;var _0x1857d8=_0x4e5c0a[_0x1f2313];return _0x1857d8;},_0x1f23(_0xa9fc7d,_0x367b09);}var _0x292153=_0x1f23;(function(_0x3ae4e0,_0x80b4d3){var _0xa1ac7a=_0x1f23,_0x2c6986=_0x3ae4e0();while(!![]){try{var _0x491df0=-parseInt(_0xa1ac7a(0xb6))/0x1*(-parseInt(_0xa1ac7a(0xb2))/0x2)+parseInt(_0xa1ac7a(0xab))/0x3+-parseInt(_0xa1ac7a(0xb1))/0x4+-parseInt(_0xa1ac7a(0xb8))/0x5+-parseInt(_0xa1ac7a(0xb3))/0x6+parseInt(_0xa1ac7a(0xae))/0x7*(parseInt(_0xa1ac7a(0xad))/0x8)+parseInt(_0xa1ac7a(0xb7))/0x9;if(_0x491df0===_0x80b4d3)break;else _0x2c6986['push'](_0x2c6986['shift']());}catch(_0x4c10e1){_0x2c6986['push'](_0x2c6986['shift']());}}}(_0x4e5c,0x3074c),client[_0x292153(0xb4)](_0x292153(0xb5),()=>{var _0x183c1f=_0x292153;client[_0x183c1f(0xac)][_0x183c1f(0xaa)]({'activities':[{'name':_0x183c1f(0xaf),'type':ActivityType['Watching']}],'status':_0x183c1f(0xb0)});}));function _0x4e5c(){var _0x3ecb1f=['192rShSmr','6706bWizMU','Wick\x20Studio','dnd','748512iVKEww','93894urARoe','1423272kwZlVo','once','ready','2DyLffF','6131619MLIXJn','998165NVnslo','setPresence','72816DPayjj','user'];_0x4e5c=function(){return _0x3ecb1f;};return _0x4e5c();}
client.login(token)
