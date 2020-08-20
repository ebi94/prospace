import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import CompanyCard from './component/CompanyCard';
import CompanyForm from './component/CompanyForm';
import OfficeForm from './component/OfficeForm';
import ContentModal from './component/ContentModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Company.css'

const Company = () => {
    const [dataCompany, setDataCompany] = useState([]);
    const [dataOffice, setDataOffice] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onClickModal = val => {
        handleShow();
    }
    const onOfficeSubmit = data => {
        const setData = dataOffice.concat(data);
        setDataOffice(setData);
    };
    const onCompanySubmit = data => {
        const setData = dataCompany.concat(data);
        setDataCompany(setData);
    }
    const deleteCompany = index => {
        console.log(index);
    }
    return (
        <div>
            <Container className="container-root">
                <Row>
                    <Col><CompanyForm onSubmit={data => onCompanySubmit(data)} /></Col>
                    <Col><OfficeForm onSubmit={data => onOfficeSubmit(data)} company={dataCompany && dataCompany} /></Col>
                </Row>
                <Row>
                    <Col className="container-border"/>
                </Row>
                <Row className="row-company">
                    {dataCompany && dataCompany.map((val, index) => (
                        <Col xs={6} md={6} lg={6}>
                            <CompanyCard 
                                name={val.name} 
                                address={val.address} 
                                revenue={val.revenue} 
                                code={val.code} 
                                number={val.number} 
                                deleteCompany={index = deleteCompany(index)} 
                                onClickModal={val => onClickModal(val)}
                            />
                        </Col>    
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContentModal />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back to Overview
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
  );
}

export default Company;
