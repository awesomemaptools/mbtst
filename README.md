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

# Serve files on localhost:
npm run serve
```

## Bundling fails:
Bundling fails with an error like this:
```
$ ./build.sh 
Error: Cannot find module './feature' from '/home/jonas/zegeba/repos/mbtst/node_modules/mapbox-gl/dist'
    at /home/jonas/zegeba/repos/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:55:21
    at load (/home/jonas/zegeba/repos/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:69:43)
    at onex (/home/jonas/zegeba/repos/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:92:31)
    at /home/jonas/zegeba/repos/mbtst/node_modules/browser-resolve/node_modules/resolve/lib/async.js:22:47
```

## Working examples:
dns.html works.
Comment out the line int src/main.js that requires the mapbox-gl module and bundling works:
```js
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl');
```
Include the DNS in index.html and the map renders fine.
