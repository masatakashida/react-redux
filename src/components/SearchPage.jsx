import React, { Component } from 'react';
import _ from 'lodash';

import axios from 'axios';
const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

//import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      sortKey: 'price',
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handlePlaceSubmit(place) {
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: place } })
      .then((results) => {
        const data = results.data;
        console.log(results);
        const result = data.results[0];
        switch (data.status) {
          case 'OK': {
            console.log('OK');
            console.log(result.formatted_address);
            console.log(result.geometry.location);
            this.setState({
              address: result.formatted_address, 
              location: result.geometry.location,
            });
            return searchHotelByLocation(result.geometry.location);
          }
          case 'ZERO_RESULTS': {
            console.log('ZERO_RESULTS');
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました');
          }
        }
        return [];
      })
      .then((hotels) => {
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey ) });
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました');
      });
  }

  handleSortKeyChange(sortKey) {
    this.setState({
      sortKey,
      hotels: sortedHotels(this.state.hotels, sortKey),
    });
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable 
              hotels={this.state.hotels}
              sortKey={this.state.sortKey}
              onSort={sortKey => this.handleSortKeyChange(sortKey)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
