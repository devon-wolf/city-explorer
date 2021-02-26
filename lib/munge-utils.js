function mungeLocation(response) {
  const targetLocation = response[0];
  const mungedResponse = {
    formatted_query: targetLocation.display_name,
    latitude: targetLocation.lat,
    longitude: targetLocation.lon
  };
  return mungedResponse;
}

function mungeWeather(response) {
  const targetData = response.data;
  const formattedResponse = targetData.map(weatherObj => {
    return {
      forecast: weatherObj.weather.description,
      time: weatherObj.datetime
    };
  });
  return formattedResponse;
}

function mungeReviews(response) {
  return response;
}

module.exports = {
  mungeLocation,
  mungeWeather,
  mungeReviews
};

