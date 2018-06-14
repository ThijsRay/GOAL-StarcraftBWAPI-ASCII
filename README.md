# GOAL StarcraftBWAPI ASCII art generator
Tool to generate ASCII art based on images for Starcraft: Brood Wars using the [GOAL Starcraft Environment](https://github.com/eishub/Starcraft).

## Requirements
- Complete installation of the GOAL Starcraft Environment. Full instructions can be found on https://github.com/eishub/Starcraft/wiki/Install-Guide
- NodeJS
- yarn (or npm, but yarn is prefered)
- [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/)

## Installation
To install the dependencies, run:
```
yarn
```
in your terminal of choice.

## Usage
Place your image in the directory and edit the configuration in `ascii.js` to match the file name. Next, run
```
node ascii.js
```
to output the generated ASCII in the terminal. 
