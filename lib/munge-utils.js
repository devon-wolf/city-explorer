function mungeLocation(response) {
  const targetLocation = response.body[0];
  
  const mungedResponse = {
    formatted_query: targetLocation.display_name,
    latitude: targetLocation.lat,
    longitude: targetLocation.lon
  };
  
  return mungedResponse;
}

function mungeWeather(response) {
  return response;
}

function mungeReviews(response) {
  return response;
}

module.exports = {
  mungeLocation,
  mungeWeather,
  mungeReviews
};

