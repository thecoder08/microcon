var memory = new Uint16Array(32768);
var accumulator = 0;
var zero = false;
var negative = false;
var ctx = document.querySelector('#canvas').getContext('2d');
function updateCanvas() {
    var x = 0;
    var y = 0;
    for (var i = 0; i < 19200; i++) {
        var word = memory[i];
        var red = Math.round((word >> 10) * 255 / 31);
        var green = Math.round(((word & 992) >> 5) * 255 / 31);
        var blue = Math.round((word & 31) * 255 / 31);
        ctx.fillStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        ctx.fillRect(x, y, 1, 1);
        x++;
        if (x > 159) {
            x = 0;
            y++;
        }
    }
}
function updateInput() {

}
function wait() { return new Promise(res => setTimeout(res)); }
var code = new Uint16Array([0x0002, 0x4B64, 0x0006, 0x0001, 0x0004, 0x4B64, 0x0002, 0x4B64, 0x0005, 0x4B64, 0x000D, 0x0000]);
(async function() {
for (var i = 0; i < code.length; i++) {
    var instruction = code[i];
    i++;
    if (instruction == 0x01) {
        accumulator = code[i];
    }
    else if (instruction == 0x02) {
        accumulator = memory[code[i]];
    }
    else if (instruction == 0x03) {
        accumulator = memory[memory[code[i]]];
    }
    else if (instruction == 0x04) {
        memory[code[i]] = accumulator;
    }
    else if (instruction == 0x05) {
        memory[memory[code[i]]] = accumulator;
    }
    else if (instruction == 0x06) {
        accumulator += code[i];
    }
    else if (instruction == 0x07) {
        accumulator += memory[code[i]];
    }
    else if (instruction == 0x08) {
        accumulator += memory[memory[code[i]]];
    }
    else if (instruction == 0x09) {
        accumulator -= code[i];
    }
    else if (instruction == 0x0A) {
        accumulator -= memory[code[i]];
    }
    else if (instruction == 0x0B) {
        accumulator -= memory[memory[code[i]]];
    }
    else if (instruction == 0x0C) {
        i = code[i];
    }
    else if (instruction == 0x0D) {
        if (accumulator != 0) {
            i = code[i];
        }
    }
    else if (instruction == 0x0E) {
        if (accumulator < 0) {
            i = code[i];
        }
    }
    else {
        i--;
    }
    if (accumulator > 19200) {
        accumulator = 0;
    }
    updateCanvas();
    updateInput();
    await wait();
}
console.log('Execution complete!');
})();