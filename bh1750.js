const BH1750 = require('bh1750_lux');

const bh1750_1 = new BH1750({addr: 0x23, bus:1, read: 'onetime'});

setInterval( () => {
bh1750_1.readLight().then(r => {
    console.log(r);
});
}, 2000);


