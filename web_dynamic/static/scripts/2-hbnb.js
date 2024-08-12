/**
 * make template/1-hbnb.html dynamic
 */

const request = require('request'); 
const $ = window.$;

function writeAmenity(amenityDict) {
  /**
   * write a dict of amenities to an elem
   */
  $('div>h4').empty(); // clear all existing values in the elem
  for (let amenity in amenityDict)
    const amenityName = amenityDict[amenity];
    $('div>h4').text(amenityName);
}

$(document).ready(function () {
  let amenityDict = {};
  $('li>input').toggle(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');
    amenityDict[amenityId] = amenityName; // add the ticked amenity to dict
    writeAmenity(amenityDict);
  }, function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');
    delete amenityDict.amenityId; // remove the unticked amenity from dict
    writeAmenity(amenityDict);
  });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const api_status = JSON.parse(body);
      if (api_status['status'] === 'OK') {
        $('div#api_status').addClass('available');
      } else  {
	    $('div#api_status').removeClass('available');
     }
    }
  });
});
