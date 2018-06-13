import React from 'react';
import PropTypes from 'prop-types';

const HotelsRow = ({ hotel }) => (
  <tr>
    <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
  </tr>
);

HotelsRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default HotelsRow;
