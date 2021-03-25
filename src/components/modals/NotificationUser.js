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
  DatePicker,
  FormTextarea
} from "shards-react";
import RangeDatePicker from "../common/RangeDatePicker";
import Modal from "../common/Modal";

const NotificationUser = props => {
  const [notificMessage, setnotificMessage] = useState("");
  //   const [subsEndDate, setEndDate] = useState(undefined);
  //   const [subsDueDate, setSubsDueDate] = useState("");

  //   const handleEndDateChange = value => {
  //     setEndDate({ endDate: new Date() });
  //   };
  //   const handleDueDateChange = value => {
  //     console.log(subsDueDate);
  //     setSubsDueDate({ subsDueDate: new Date(value) });
  //   };
  const handleChange = e => {
    setnotificMessage(e.target.value);
  };

  return (
    <Modal
      classNames={props.classNames}
      title="Notification to User"
      onClick={props.onClick}
    >
      <ListGroup flush>
        <Form>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <FormGroup>
                  <label htmlFor="feTown">Notification Type</label>
                  <FormSelect id="noficationType">
                    <option>Choose...</option>
                    <option>Welcome notification</option>
                    <option>Subscription Due</option>
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <FormTextarea onChange={handleChange} />
                </FormGroup>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button theme="accent">Send</Button>
          </ListGroupItem>
        </Form>
      </ListGroup>
    </Modal>
  );
};

export default NotificationUser;
