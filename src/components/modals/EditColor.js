import React, { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  Button,
  DatePicker
} from "shards-react";
import Modal from "../common/Modal";

const EditColor = props => {
  return (
    <Modal
      classNames={props.classNames}
      title="Edit Theme"
      onClick={props.onClick}
    >
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <label>Theme Name</label>
                  <FormInput
                    placeholder="ex. Red"
                    value=""
                    onChange={() => {}}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Line color</label>
                  <FormInput
                    placeholder="#fefedd"
                    value=""
                    onChange={() => {}}
                  />
                </FormGroup>
                <FormGroup>
                  <label> Text Color</label>
                  <FormInput
                    placeholder="#fefedd"
                    value=""
                    onChange={() => {}}
                  />
                </FormGroup>
                <FormGroup>
                  <label> Button/Icon Linear Color</label>
                  <FormInput
                    placeholder="#fefedd,#dfdede"
                    value=""
                    onChange={() => {}}
                  />
                </FormGroup>

                <Button theme="accent">Update</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

export default EditColor;
