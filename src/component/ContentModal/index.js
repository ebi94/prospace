import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OfficeCard from '../OfficeCard';

const ContentModal = ( {name, address, revenue, code, number, office } ) => {
    const deleteOffice = index => {
        console.log(index);
    }
    return (
        <div>
            <Container className="container-root">
                <Row>
                    <Col><h1>{name}</h1></Col>
                </Row>
                <Row>
                    <Col className="container-border"/>
                </Row>
                <Row className="row-company">
                    {office && office.map((val, index) => (
                        <Col xs={6} md={6} lg={6}>
                            <OfficeCard 
                                name={val.name} 
                                address={val.address} 
                                revenue={val.revenue} 
                                code={val.code} 
                                number={val.number} 
                                deleteOffice={index = deleteOffice(index)}
                            />
                        </Col>    
                    ))}
                </Row>
            </Container>
        </div>
  );
}

ContentModal.defaultProps = {
    name: '',
    address: '',
    revenue: '',
    code: '',
    number: '',
    office: ''
}

ContentModal.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    revenue: PropTypes.number,
    code: PropTypes.number,
    number: PropTypes.number,
    office: PropTypes.array
  };

export default ContentModal;
