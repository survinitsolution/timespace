import React, { useState, useEffect } from "react";
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
  DatePicker,
} from "shards-react";
import RangeDatePicker from "../common/RangeDatePicker";
import Modal from "../common/Modal";

const ViewUser = (props) => {
  const [viewData, setViewData] = useState({});
  useEffect(() => {
    if (props.sendData == undefined) {
      return setViewData({});
    } else {
      return setViewData(props.sendData);
    }
  }, [props.sendData]);
  console.log(props.sendData);
  if (props.sendData == {}) {
    return <div>Please Wait..</div>
  }
  return (
    <Modal
      classNames={props.classNames}
      title="View User Details"
      onClick={() => {
        props.onClick();
        setViewData({});
      }}
    >
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label className="d-block">User Name</label>
                  <span>{viewData.name}</span>
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label className="d-block">Contact Number</label>
                  <span>{viewData.mobNumber}</span>
                </Col>
              </Row>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label className="d-block">District</label>
                  <span>Maysoor</span>
                </Col>
                {/* State */}
                <Col md="6" className="form-group">
                  <label className="d-block">State</label>
                  <span>Kannad</span>
                </Col>
              </Row>
              <FormGroup>
                <label className="d-block">Town</label>
                <span>Stree adddresss</span>
              </FormGroup>
              <Row form>
                {/* Email */}
                {/* Zip Code */}
                <Col md="6" className="form-group">
                  <label className="d-block">Status</label>
                  <span>Approved</span>
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label className="d-block">Subscription</label>
                  <span>Free</span>
                </Col>
              </Row>

              <Row form>
                {/* Email */}
                {/* Zip Code */}
                <Col md="6" className="form-group">
                  <label className="d-block">Subscription End Date</label>
                  <span>06-02-2021</span>
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label className="d-block">Subscription Due Date</label>
                  <span>10-02-2022</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

export default ViewUser;
