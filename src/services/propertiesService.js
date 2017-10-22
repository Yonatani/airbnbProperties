import axios from 'axios';
import propertySerializer from '../serializers/property';
import reviewSerializer from '../serializers/review';

let offset = 0;
let limit = 9;
class propertiesService {

   static getPropertiesByCity = (city) => {
     return axios({
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*',
      },
      url:`https://cors-anywhere.herokuapp.com/https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location='${city}'&_limit=${limit}&_offset=${offset}`,
    })
      .then((data) => {
        const serializedListings = _.map(data.data.search_results, (property)=>propertySerializer(property))
        offset = offset+limit*2;
        return {totalListings: data.data.metadata.listings_count, listings: serializedListings};
      })
      .catch(() => {
      });
  };
  static getReviews = (id) => {
    return axios({
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      url:`https://cors-anywhere.herokuapp.com/https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&listing_id=${id}&role=all`,
    })
      .then((data) => {
        return _.map(data.data.reviews, (review)=>reviewSerializer(review));
      })
      .catch(() => {
        console.log('error');
      });
  };
}


export default propertiesService;




