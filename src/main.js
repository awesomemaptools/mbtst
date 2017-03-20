'use strict';

// var app = require('./app');
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl');
var mapboxgl = require('mapbox-gl/src/index.js');
// var mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiZWxsdnRyemVnIiwiYSI6ImNpejl4M2M0NDAxbWoycXRlanZnc283dnYifQ.sPFCSTsdlCOp1hk6afDvJg';
var map = new mapboxgl.Map({
  container: 'map', // container id
  // style: 'mapbox://styles/ellvtrzeg/cizzkhyut00aw2smrbbul575u', //stylesheet location
  style: 'mapbox://styles/mapbox/outdoors-v10', //stylesheet location
  center: [6.16342, 62.47126], // aalesund 
  zoom: 11 // starting zoom
});


console.log('main.js');
