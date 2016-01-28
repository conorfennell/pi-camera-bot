var TelegramBot = require('node-telegram-bot-api');
var exec = require('child_process').exec;
var BOT_TOKEN = 'your-bot-token-provided-by-botfather';
var bot = new TelegramBot(BOT_TOKEN, {polling: true});

var photoQueue = [];

bot.onText(/\/photo/, function (msg) {
  console.log('photo');
  var length = photoQueue.length;
  if (length > 0) {
     photoQueue.unshift(msg);
     if (length === 1) {
       bot.sendMessage(msg.chat.id, 'Please wait, there is 1 photo to be taken before you.')
     } else {
       bot.sendMessage(msg.chat.id, 'Please wait, there are ' + length + ' photos to be taken before you.')
     }
  } else {
    photoQueue.push(msg);
    takeAndSendPhoto(photoQueue[photoQueue.length - 1]);
  }
});

function takeAndSendPhoto(msg) {
  bot.sendChatAction(msg.chat.id, 'upload_photo').then(function() {
    console.log('take photo');
    exec('raspistill -o /home/pi/pi-camera-bot/temp.jpg -w 1920 -vf -hf -h 1080 -q 15', function photoTaken() {
      bot.sendPhoto(msg.chat.id, '/home/pi/pi-camera-bot/temp.jpg', {caption: 'Sweet pic'}).then(function nextPhoto() {
        photoQueue.pop();
        if (photoQueue.length > 0) {
          takeAndSendPhoto(photoQueue[photoQueue.length - 1]);
        }
     });
  })});
}
