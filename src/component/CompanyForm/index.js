import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const CompanyForm = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <div className="box-form">
            <h4>Create Company</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control placeholder="name" size="sm" name="name" ref={register({ required: true })} />
                    {errors.name && <span className="warning-text">This field is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control placeholder="address" size="sm" name="address" ref={register({ required: true })} />
                    {errors.address && <span className="warning-text">This field is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Revenue:</Form.Label>
                    <Form.Control placeholder="revenue" size="sm" name="revenue" ref={register({ required: true })} />
                    {errors.revenue && <span className="warning-text">This field is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col md="4">
                            <Form.Label>Phone No:</Form.Label>
                            <Form.Control placeholder="code" size="sm" name="code" ref={register({ required: true })} />
                        </Col>
                        <Col md="8">
                            <Form.Label className="hidden-text">:</Form.Label>
                            <Form.Control placeholder="number"  size="sm" name="number" ref={register({ required: true })} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>{errors.code && errors.number && <span className="warning-text">This field is required</span>}</Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Button className="button-submit" type="submit" variant="secondary">Create</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

CompanyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default CompanyForm;
