import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const OfficeForm = ({ onSubmit, company }) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <div className="box-form">
            <h4>Create Office</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control placeholder="name" size="sm" name="name" ref={register({ required: true })} />
                    {errors.name && <span className="warning-text">This field is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Location:</Form.Label>
                            <Form.Control placeholder="latitude" size="sm" name="lat" ref={register({ required: true })} />
                        </Col>
                        <Col>
                            <Form.Label className="hidden-text">:</Form.Label>
                            <Form.Control placeholder="longtitude"  size="sm" name="lng" ref={register({ required: true })} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>{errors.lat && errors.lng && <span className="warning-text">This field is required</span>}</Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Office Start Date:</Form.Label>
                    <Form.Control placeholder="date" size="sm" name="startdate" ref={register({ required: true })} />
                    {errors.startdate && <span className="warning-text">This field is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Company:</Form.Label>
                        <Form.Control as="select"  size="sm" name="company" ref={register({ required: true })} >
                            {company && company.map(val => (
                                <option value={val.name}>{val.name}</option>
                            ))}
                        </Form.Control>
                    {errors.company && <span className="warning-text">This field is required</span>}
                </Form.Group>
                <Form.Group>
                    <Button className="button-submit" type="submit" variant="secondary">Create</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

OfficeForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
    company: PropTypes.array.isRequired
};

export default OfficeForm;
