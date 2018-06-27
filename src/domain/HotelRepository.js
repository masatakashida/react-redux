import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1048685660900958190';


// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then((result) => {
      return result.data.hotels.map((hotel) => {
        console.log(hotel);
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        const price = basicInfo.hotelMinCharge
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbUrl: basicInfo.hotelThumbnailUrl,
          price: price ? `${price}円` : '空室なし',
          reviewAverage: basicInfo.reviewAverage,
          reviewCount: basicInfo.reviewCount,
        };
      })
    });
};
