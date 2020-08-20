import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { X } from 'react-bootstrap-icons'

const CompanyCard = ({ name, address, revenue, code, number, deleteCompany }) => {
  return (
    <div className='box-company'>
      <Card>
        <Card.Header className="header-card">
          <Card.Title className="title-header-card">{name}</Card.Title>
          <Button  className="float-right" onClick={deleteCompany} variant="light" size="sm"><X color="black" size={30} fontWeight={600} /></Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Address</Card.Title>
          <Card.Text>
            {address}
          </Card.Text>
          <Card.Title>Revenue</Card.Title>
          <Card.Text>
            {revenue}
          </Card.Text>
          <Card.Title>Phone No</Card.Title>
          <Card.Text>
            {code}{number}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
  code: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  deleteCompany: PropTypes.func.isRequired
};

export default CompanyCard;
