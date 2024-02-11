const ngrok = require('ngrok');
(async function() {
    const url = await ngrok.connect({authtoken: '23kVl8vCQ9Shw3PdpzXwAdpJymY_2sAevqdge84yAqTRrayfM', addr: 3000});
    console.log(url)
})();