# Test mapbox-gl in browserify

Super simple repo to test mapbox-gl in browserify.

## Get started:
Install NodeJS on your system. then:
```bash
git clone https://github.com/awesomemaptools/mbtst
cd mbtst
npm install

# Build the bundled file with browsefiry:
./build.sh 
# It actually runs this command:
# node node_modules/browserify/bin/cmd.js --entry src/main.js --outfile dist/build.js

# Build files and serve them on localhost:
npm run test
```

## Bundling fails:
When requiring mapbox-gl in src/main.js as documented https://www.mapbox.com/mapbox-gl-js/api/ :
```js
var mapboxgl = require('mapbox-gl/dist/mapbox-gl');
```

Then bundling fails with an error like this:
```
$ ./build.sh 
Error: Cannot find module './feature' from '/[...]/mbtst/node_modules/mapbox-gl/dist'
    at /[...]/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:55:21
    at load (/[...]/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:69:43)
    at onex (/[...]/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:92:31)
    at /[...]/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:22:47
```
This possible bug is reported to mapbox here:
https://github.com/mapbox/mapbox-gl-js/issues/4453

## Working examples:
Simple DNS solution works in cdn.html.

Comment out the line in src/main.js that requires the mapbox-gl module and bundling works:
```js
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl');
```

Currently is works when requiring like this instead:
```js
var mapboxgl = require('mapbox-gl/src/index.js');
```

Include the CDN in index.html and the map renders fine.
