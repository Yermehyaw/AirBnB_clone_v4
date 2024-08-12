/**
 * make template/1-hbnb.html dynamic
 */

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
});
