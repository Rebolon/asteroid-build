ASTEROID-BUILD
==============

## Information
This is a simple project to help asteroid user to get a "use it simply" build system for asteroid npmjs package.
A dist file is already available in dist folder.
You can test it with the example/index.html : open it with a browser and open the dev console. Then type Asteroid,
it should be available.

## Usage
You can do another build with this command : 
browserify src/index.js -t babelify -d -p [minifyify --map app.js.map --output dist/app.js.map] --outfile dist/app.js

or with npm build command

