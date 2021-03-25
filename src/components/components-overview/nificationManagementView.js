import React, { useState } from "react";
import {
  Row,
  Col,
  FormInput,
  FormTextarea,
  Button,
  Form,
  ListGroupItem,
} from "shards-react";

const NotificationDataFields = (props) => {

  return (
    <ListGroupItem key={props.key} className="p-3">
      <Row>
        <Col>
          <Row className="justify-content-start">
            <Col md="8" className="form-group">
              <Card small className="mb-4">
                <CardBody className="p-0 pb-3">
                 <h3>Title</h3>
                 <p>This is title.</p>
                 <h3>Title Description.</h3>
                 <p>This is a description.</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default NotificationDataFields;
