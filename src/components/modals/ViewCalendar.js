import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Badge,
} from "shards-react";
import Modal from "../common/Modal";

const ViewCalendar = (props) => {
  const [viewData, setViewData] = useState([]);
  useEffect(() => {
    if (props.sendData == undefined) {
      return setViewData([]);
    } else {
      return setViewData([props.sendData]);
    }
  }, [props.sendData]);
  console.log("This is props.sendData", props.sendData);
  console.log(viewData == {});
  console.log("this is viewData", viewData);

  if (viewData == {}) {
    return <div>Please Wait..</div>;
  }
  return (
    <div>
      {viewData.map((each, id) => {
        return (
          <Modal
            containModalSize="bd-example-modal-lg"
            modalSize="modal-lg"
            classNames={props.classNames}
            key={id}
            title="View Calendar Details"
            onClick={props.onClick}
          >
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Row form>
                      {/* First Name */}
                      <Col md="6">
                        <FormGroup>
                          <label className="d-block">Calendar Name</label>
                          <span>{each.calendarName}</span>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label className="d-block">Location</label>
                          {each.location.all ? (
                            <span>All</span>
                          ) : (
                            <span>
                              {each.location.state}|
                              {each.location.district}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Tags listing */}
                    <Row>
                      <Col sm="8">
                        <label className="d-block">
                          <strong>Tags</strong>
                        </label>
                        <ul>
                          {each.tags.map((each, id) => {
                            return <li key={id}>{each}</li>;
                          })}
                        </ul>
                      </Col>
                    </Row>
                    {/* Categories listing */}
                    <Row>
                      <Col sm="8">
                        <label className="d-block">
                          <strong>Category</strong>
                        </label>
                        <span>{each.category}</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Modal>
        );
      })}
    </div>
  );
};

export default ViewCalendar;
