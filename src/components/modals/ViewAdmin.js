import React, { useEffect, useState } from "react";
import { CustomScrollBar } from "react-custom-scrollbar";

import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Badge
} from "shards-react";
import Modal from "../common/Modal";

const ViewAdmin = props => {
  const [viewData, setViewData] = useState({});
  useEffect(() => {
    if (props.sendData == undefined) {
      return setViewData({});
    } else {
      console.log(props.sendData);
      return setViewData(props.sendData);
    }
  }, [props.sendData]);
  return (
    <Modal
      classNames={props.classNames}
      title="Admin View"
      onClick={props.onClick}
    >
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Row form>
                {/* First Name */}
                <Col md="12" className="form-group">
                  <FormGroup>
                    <label className="d-block">
                      <strong>Admin Name:</strong>
                    </label>
                    <span>{viewData.adminName}</span>
                  </FormGroup>
                  <FormGroup>
                    <label className="d-block">
                      <strong>Mobile Number:</strong>
                    </label>
                    <span>{viewData.mobNumber}</span>
                  </FormGroup>
                  <FormGroup>
                    <label className="d-block">
                      <strong>Location:</strong>
                    </label>
                    <span>{viewData.location}</span>
                  </FormGroup>

                  <FormGroup>
                    <label className="d-block">
                      <strong>Permissions:</strong>
                    </label>
                    <ul>

                    {viewData.permissions == undefined ? (
                      <span></span>
                    ) : (
                      viewData.permissions.map((each,id) => <li key={id}>{each}<br/></li>)
                    )}
                    </ul>

                    {/* <span>{viewData.permissions}</span>  */}
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

export default ViewAdmin;
