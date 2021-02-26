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
  const targetData = response.businesses;
  const formattedResponse = targetData.map(reviewObj => {
    return {
      name: reviewObj.name,
      image_url: reviewObj.image_url,
      price: reviewObj.price,
      rating: reviewObj.rating,
      url: reviewObj.url
    };
  });
  return formattedResponse;
}

module.exports = {
  mungeLocation,
  mungeWeather,
  mungeReviews
};

