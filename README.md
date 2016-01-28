# pi-camera-bot


Camera used: http://www.amazon.co.uk/gp/product/B00E1GGE40?ref_=pe_385721_51767431_TE_dp_4

Install node on your raspberry pi:

For Raspberry Pi 2 Model B

1. wget https://nodejs.org/dist/v4.2.6/node-v4.2.6-linux-armv7l.tar.gz
2. tar -xvf node-v4.2.6-linux-armv7l.tar.gz
3. cd node-v4.2.6-linux-armv7l
4. sudo cp -R * /usr/local/
5. node -v //sanity check

For Raspberry Pi model A+ or B+

1. wget https://nodejs.org/dist/v4.2.6/node-v4.2.6-linux-armv6l.tar.gz
2. tar -xvf node-v4.2.6-linux-armv6l.tar.gz
3. cd node-v4.2.6-linux-armv6l
4. sudo cp -R * /usr/local/
5. node -v //sanity check

To run pi-camera-bot:

1. clone down pi-camera-bot
2. cd ./pi-camera-bot
3. npm install // Run from the command line to install any node modules referenced in the package.json
4. Put your own bot token in the bot.js file "var BOT_TOKEN = 'your-bot-token-provided-by-botfather';"
5. node bot.js // starts the bot; send '/photo' message from Telegram to take a pic.
