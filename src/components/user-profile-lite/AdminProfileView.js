import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName" className="d-block">
                    First Name
                  </label>
                  <span>Sierra Brook</span>
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName" className="d-block">
                    Last Name
                  </label>
                  <span>Brook</span>
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail" className="d-block">
                    Email
                  </label>
                  <span>sierra@example.com</span>
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  {/* <label htmlFor="fePassword">Password</label>
                  <span></span> */}
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress" className="d-block">
                  Address
                </label>
                <span>1234 Main st.</span>
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity" className="d-block">
                    City
                  </label>
                  <span>Maysoor</span>
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState" className="d-block">
                    State
                  </label>
                  <span>Karnatak</span>
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode" className="d-block">
                    Zip
                  </label>
                  <span>332056</span>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
