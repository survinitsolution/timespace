import React from "react";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card
} from "shards-react";

const PaidPlan = () => (
  <Col sm="12" md="6">
    <Card className="p-3 shadow-sm">
      <strong className="d-block mb-2">Paid Plan</strong>
      <Form>
        <FormGroup>
          <FormInput
            type="text"
            placeholder="Price"
            value=""
            onChange={() => {}}
          />
        </FormGroup>
        <FormGroup>
          <FormInput placeholder="Duration" value="" onChange={() => {}} />
        </FormGroup>
      </Form>
    </Card>
  </Col>
);

export default PaidPlan;
