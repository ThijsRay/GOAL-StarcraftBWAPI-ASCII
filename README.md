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

## Setup your GOAL project
To make this work, increase the amount of agents in your mas2g file to at least 30. 
Then, create a two types of ASCII controller agents, for example:
```
define asciiController as agent {
    use AsciiController.Master.AsciiControllerInit as init.
    use AsciiController.Master.AsciiController as main.
    use AsciiController.Master.AsciiControllerEvent as event.
}

define asciiSlave as agent {                                                                                           
    use Controllers.AsciiController.Slave.AsciiSlave as main.
}

```
To launch these agents, they should be added to the launch policy. For example:
```
launchpolicy {

    when name = manager1 launch asciiController.                                                                    
    
    % Ascii slave
    when name = manager2 launch asciiSlave.
    when name = manager3 launch asciiSlave.
    when name = manager4 launch asciiSlave.
    when name = manager5 launch asciiSlave.
    when name = manager6 launch asciiSlave.
    when name = manager7 launch asciiSlave.
    when name = manager8 launch asciiSlave.
    when name = manager9 launch asciiSlave.
    when name = manager10 launch asciiSlave.
    when name = manager11 launch asciiSlave.
    when name = manager12 launch asciiSlave.
    when name = manager13 launch asciiSlave.
    when name = manager14 launch asciiSlave.
    when name = manager15 launch asciiSlave.
    when name = manager16 launch asciiSlave.
    when name = manager17 launch asciiSlave.
    when name = manager18 launch asciiSlave.
    when name = manager19 launch asciiSlave.
    when name = manager20 launch asciiSlave.
    when name = manager21 launch asciiSlave.
    when name = manager22 launch asciiSlave.
    when name = manager23 launch asciiSlave.
    when name = manager24 launch asciiSlave.
    when name = manager25 launch asciiSlave.
    when name = manager26 launch asciiSlave.
    when name = manager27 launch asciiSlave.
    when name = manager28 launch asciiSlave.
    when name = manager29 launch asciiSlave.
    when name = manager30 launch asciiSlave.
}

```
Please note that sample files for the ASCII master and the ASCII slave are provided in this repository.


## Usage
Place your image in the directory and edit the configuration in `ascii.js` to match the file name. Next, run
```
node ascii.js
```
to output the generated ASCII in the terminal. This output should be pasted in `Master/AsciiController.mod2g`.
