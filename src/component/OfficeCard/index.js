import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { X } from 'react-bootstrap-icons'

const OfficeCard = ({ name, lng, lat, startDate, deleteOffice }) => {
  return (
    <div className='box-company'>
      <Card>
        <Card.Header>
          {name}
          <Button  className="float-right" onClick={deleteOffice} variant="light" size="sm"><X color="black" size={30} fontWeight={600} /></Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Location:</Card.Title>
          <Card.Text>
            lat: {lat}
          </Card.Text>
          <Card.Text>
            lng: {lng}
          </Card.Text>
          <Card.Title>Office Start Date:</Card.Title>
          <Card.Text>
            {startDate}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

OfficeCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
  code: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  deleteOffice: PropTypes.func.isRequired
};

export default OfficeCard;
