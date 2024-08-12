/**
 * make template/1-hbnb.html dynamic
 */

const request = require('request'); 
const $ = window.$;

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
      $('div#placesh1 + section').html(function (index, oldHTML) {
        oldHTML + `<article></article>`;
      });
	
    }
  });
