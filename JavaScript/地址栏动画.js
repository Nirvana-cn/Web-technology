// https://juejin.im/post/5c49b822f265da6142743a87
// var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

var f = ['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];

function loop() {
    location.hash = f[Math.floor((Date.now()/100)%f.length)];

    setTimeout(loop, 50);
}

loop();