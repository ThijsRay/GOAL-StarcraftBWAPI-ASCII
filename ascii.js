// START CONFIG

// The path of the file that should be converted.
const FILENAME = "example.png";

// Define the dimensions of the output image. These are set to the correct dimensions for Starcraft.
const WIDTH = 50;
const HEIGHT = 25;

// Set this to true if you want to convert gifs.
const PROCESS_GIFS = false;
// If you want to process gifs, please define the amount of frames you want to convert.
const GIF_SIZE = 42;


// END CONFIG





const fs = require("fs");
const PNG = require("pngjs").PNG;
const gm = require("gm");

// Define the starcraft colours
const colors = {
    "\\u0002": "#B8B8E8",
    "\\u0003": "#DCDC3C",
    "\\u0004": "#ffffff",
    "\\u0005": "#847474",
    "\\u0006": "#C81818",
    "\\u0007": "#10FC18",
    "\\u0008": "#F40404",
    "\\u000b": "#000000",
    "\\u000e": "#0C48CC",
    "\\u000f": "#2CB494",
    "\\u0010": "#88409C",
    "\\u0011": "#F88C14",
    "\\u0015": "#703014",
    "\\u0018": "#088008",
    "\\u0019": "#FCFC7C",
    "\\u001b": "#ECC4B0",
    "\\u001c": "#4068D4",
    "\\u001d": "#74A47C",
    "\\u001e": "#9090B8",
    "\\u001f": "#00E4FC"
};
const closestColor = require("nearest-color").from(colors);

if(PROCESS_GIFS) {
    for(var i = 0; i < GIF_SIZE; i++) {
        (function (count) {
            gm(FILENAME).selectFrame(count).resize(WIDTH, HEIGHT).write('frames/' + count + '.png', function(err) {
                if(!err) {
                    console.log(calculateColours(count));
                }
            });

        }(i));
    }
} else {
    gm(FILENAME).resize(WIDTH, HEIGHT).write('frames/0.png', function(err) {
        if(!err) {
            console.log(calculateColours(0));
        }
    })
}

function calculateColours(index) {

    const data = fs.readFileSync('frames/' + index + '.png');
    const png = PNG.sync.read(data);

    let slave = 0;
    let ret = "";
    for (let y = 0; y < png.height; y++) {
        const nl = Array(y + 1).join("\\u000a");

        ret += ` + (asciiSlave_${slave++}).send(show("${nl}`;

        let last = "";
        for (let x = 0; x < png.width; x++) {
            const idx = (png.width * y + x) << 2;
            let closest = closestColor({ r: png.data[idx], g: png.data[idx + 1], b: png.data[idx + 2] });
            
            if (png.data[idx + 2] === 255) closest = { name: "\\u000b" };

            if (closest.name === last) {
                ret += "|||| ";
            } else {
                last = closest.name;
                ret += last + "|||| ";
            }
        }

        ret += `"))`;
    }
    
    ret = "if bel(M == " + index + ") then " + ret.substring(3, ret.length) + ".\n";

    return ret;
}

