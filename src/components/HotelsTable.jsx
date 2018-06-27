import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <th className="hotel-price-column">値段</th>
        <th onClick={() => onSort('reviewAverage')}>レビュー</th>
        <th>レビュー件数</th>
        <td>距離</td>
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  onSort: PropTypes.func.isRequired,
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
