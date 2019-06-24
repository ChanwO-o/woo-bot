var tmi = require('tmi.js');
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        username: 'wo_obot',
        password: 'oauth:jw9ode52debp3var49h2vthnlfedah'
    },
    channels: ['wO_o']
};

var client = new tmi.client(options);
client.connect();




client.on('connected', function(address, port) {
    console.log('Address: ' + address + ' Port: ' + port);
    client.action('wO_o', "Hello I'm wo_obot!");
});



client.on("action", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    client.action('wO_o', "onaction");
    // Do your stuff.
});



client.on('chat', function(channel, user, message, self) {
    switch (message) {
        case '!우봇':
        case '!woobot':
        case '!wo_obot':
        case '!wo-obot':
            client.action('wO_o', "안녕하세요 우님의 충실한 우봇입니답  Hello I'm woo-bot, wO_o's faithful companion");
            break;
        case '!규칙':
        case '!rules':
            client.action('wO_o', '매너채팅 해주세요 Please treat others with respect');
            break;
        case '!업타임':
        case '!uptime':
            client.action('wO_o', 'uptime :');
            break;
        case '!게임':
        case '!games':
            client.action('wO_o', 'Necrodancer, Tetris, Counter-Strike, ETG, RhythmStar, etc.');
            break;
        case '!기록':
        case '!records':
            client.action('wO_o', 'Necrodancer Cadence speedrun: 7:55:37 Tetris sprint: 0:46:801');
            break;
        case '!빡종':
        case '!ragequit':
            client.action('wO_o', '빡종 횟수(ragequit counter): ' + '회');
            break;
            
        // 훈수카운터, 샷건 카운터 (kinda like !ripdevil)
        
        default:
            break;
    }
});