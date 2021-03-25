import React, { useEffect, useState } from "react";
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
} from "shards-react";
import Modal from "../common/Modal";

const EditUser = props => {
  const [sendData, setSendData] = useState([]);
  const [editName, setEditName] = useState("");
  const [editContactNum, setContactNum] = useState("");
  const [editState, setEditState] = useState("");
  const [editDistrict, setEditDistrict] = useState("");
  const [editTown, setEditTown] = useState("");
  useEffect(() => {
    if (props.sendData == undefined) {
      return setSendData([]);
    } else {
      return setSendData([props.sendData]);
    }
  }, [props.sendData]);
  const handleClickSave = () => {
    const editData = {
      name: editName,
      contactNum: editContactNum,
      state: editState,
      district: editDistrict,
      town: editTown
    };
    console.log(editData);
  };
  return (
    <div>
      {sendData.map((each, id) => {
        return (
          <Modal
            containModalSize="bd-example-modal-lg"
            modalSize="modal-lg"
            classNames={props.classNames}
            title="Edit User"
            key={id}
            onClick={() => {
              props.onClick();
              setSendData([]);
            }}
          >
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="userName">User Name</label>
                          <FormInput
                            id="userName"
                            placeholder="User name"
                            defaultValue={each.name}
                            onChange={e => setEditName(e.target.value)}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="userContact">Contact Number</label>
                          <FormInput
                            id="userContact"
                            placeholder="Contact Number"
                            defaultValue={sendData.mobNumber}
                            onChange={e => setContactNum(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* City */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feInputState">State</label>
                          <FormSelect
                            id="feInputState"
                            onChange={e => {
                              setEditState(e.target.value);
                              setEditDistrict("");
                              setEditTown("");
                            }}
                          >
                            <option>Choose...</option>
                            <option>Rajasthan</option>
                            <option>Jammu</option>
                            <option>Kerla</option>
                          </FormSelect>
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feCity">District</label>
                          <FormSelect
                            id="feInputState"
                            defaultValue={editDistrict}
                            onChange={e => {
                              setEditDistrict(e.target.value);
                              setEditTown("");
                            }}
                          >
                            <option>Choose...</option>
                            <option>District1</option>
                            <option>District2</option>
                            <option>District3</option>
                          </FormSelect>
                        </Col>
                        {/* State */}
                      </Row>
                      <FormGroup>
                        <label htmlFor="feTown">Town</label>
                        <FormSelect
                          id="feInputState"
                          onChange={e => {
                            setEditTown(e.target.value);
                          }}
                        >
                          <option>Choose...</option>
                          <option>Town1</option>
                          <option>Town2</option>
                          <option>Town3</option>
                        </FormSelect>
                      </FormGroup>
                      <Button theme="accent" onClick={handleClickSave}>
                        Save
                      </Button>
                    </Form>
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

export default EditUser;
