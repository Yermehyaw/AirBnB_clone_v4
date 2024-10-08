/**
 * make template/1-hbnb.html dynamic
 */

const request = require('request'); 
const $ = window.$;

function writePlace(amenityDict) {
  /**
   * writes a new html element
   */
  for (let amenity in amenityDict) {
    const amenityName = amenityDict[amenity];
    $('div>h4').text(amenityName);
  }
}


$(document).ready(function () {

  const postData = {};

  const options = {
    json: postData,
    methods: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/'
  }

  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      list_places = JSON.parse(body);
      $('section#places').append( `<article></article>`); // create article tag to hold alpp places
	  for (let place in list_places) {
	    if (place) {
	      createDiv();
	      const placeTitle = $(`<h2>${place.name}</h2>`) // add heading titke
	      $('section#places+article').append(placeTitle);
	    }
	  }
	  }
    }
  });
