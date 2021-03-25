import React, { useEffect, useState } from "react";
import moment from "moment";
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
import dotenv from "dotenv";
var CryptoJS = require("crypto-js");

const CreateUser = (props) => {
  const [userName, setUserName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [status, setStatus] = useState("");
  const [userType, setUserType] = useState("");
  const [subscriptionID, setSubscriptionID] = useState(0);
  const [subscriptionEndDate, setSubscriptionEndDate] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("Free");
  const [showsubScription, setShowSubScription] = useState([]);
  const [ID, setId] = useState(4);
  const data = [
    {
      id: 1,
      name: "A",
      planType: "Free",
      duration: 2,
      choosedUnit: "Weeks",
    },
    {
      id: 2,
      name: "B",
      planType: "Free",
      duration: 3,
      choosedUnit: "Weeks",
    },
    {
      id: 3,
      name: "C",
      planType: "Free",
      duration: 2,
      choosedUnit: "Month",
    },
    {
      id: 4,
      name: "D",
      planType: "Paid",
      duration: 2,
      choosedUnit: "Weeks",
    },
    {
      id: 5,
      name: "E",
      planType: "Paid",
      duration: 6,
      choosedUnit: "Weeks",
    },
    {
      id: 6,
      name: "F",
      planType: "Paid",
      duration: 2,
      choosedUnit: "Months",
    },
    {
      id: 7,
      name: "G",
      planType: "Paid",
      duration: 2,
      choosedUnit: "Years",
    },
    {
      id: 8,
      name: "H",
      planType: "Paid",
      duration: 2,
      choosedUnit: "Weeks",
    },
  ];

  function allClear() {
    setUserName("");
    setContactNum("");
    setDistrict("");
    setState("");
    setTown("");
    setStatus("");
  }
  //adduser post request
  function handleButton(e) {
    // const dataUpload = {
    //   userName: userName,
    //   contactNum: contactNum,
    //   district: district,
    //   state: state,
    //   town: town,
    //   status: status,
    //   subscriptionEndDate: subscriptionEndDate
    // };

    const dataUpload = {
      id: ID,
      name: userName,
      mobNumber: contactNum,
      language: "English",
      status: "Approved",
      admin: "Super Admin",
      subscription: subscriptionType,
    };

    //
    props.setUserData((prevState) => {
      return [...prevState, dataUpload];
    });
    //
    var ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(dataUpload),
      process.env.REACT_APP_MY_SECRET_KEY
    ).toString();
    console.log(ciphertext);
    var bytes = CryptoJS.AES.decrypt(
      ciphertext,
      process.env.REACT_APP_MY_SECRET_KEY
    );
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    //log decrypted Data
    console.log(decryptedData);
    allClear();
  }
  useEffect(() => setShowSubScription(data), []);
  return (
    <Modal
      classNames={props.classNames}
      title="Create User"
      onClick={props.onClick}
    >
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="12" className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <FormInput
                      id="userName"
                      placeholder="User name"
                      value={userName}
                      name="userName"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Col>
                  {/* Last Name */}
                </Row>
                <Row>
                  <Col md="6" className="form-group">
                    <label htmlFor="userContact">Contact Number</label>
                    <FormInput
                      id="userContact"
                      placeholder="Contact Number"
                      value={contactNum}
                      name="contactNum"
                      onChange={(e) => setContactNum(e.target.value)}
                    />
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">User Type</label>
                    <FormSelect
                      id="feCity"
                      placeholder="User Type"
                      value={userType}
                      name="userType"
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option>Choose...</option>
                      <option>Tester</option>
                      <option>Admin</option>
                      <option>Regular User</option>
                      <option>Super Admin</option>
                    </FormSelect>
                  </Col>
                </Row>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">State</label>
                    <FormSelect
                      id="feInputState"
                      name="state"
                      defaultValue={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option>Choose...</option>
                      <option>Kerla</option>
                      <option>Rajasthan</option>
                      <option>Jammu</option>
                    </FormSelect>
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">District</label>
                    <FormSelect
                      id="feCity"
                      placeholder="District"
                      value={district}
                      name="district"
                      onChange={(e) => setDistrict(e.target.value)}
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
                    id="feTown"
                    value={town}
                    name="town"
                    onChange={(e) => setTown(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option>Town1</option>
                    <option>Town2</option>
                    <option>Town3</option>
                  </FormSelect>
                </FormGroup>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">Subscription Plan Type</label>
                    <FormSelect
                      id="feInputState"
                      name="planType"
                      onChange={(e) => {
                        setShowSubScription(data);
                        setSubscriptionType(e.target.value);
                        setSubscriptionID(0);
                      }}
                    >
                      <option>Choose...</option>
                      <option>Free</option>
                      <option>Paid</option>
                    </FormSelect>
                  </Col>
                  {/* State */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">Choose Subscription</label>
                    <FormSelect
                      id="feInputState"
                      name="state"
                      onChange={(event) => {
                        const selectedIndex =
                          event.target.options.selectedIndex;
                        setSubscriptionID(
                          event.target.options[selectedIndex].getAttribute(
                            "data-key"
                          )
                        );
                      }}
                    >
                      <option>Choose...</option>
                      {showsubScription.map((each, index) => {
                        if (subscriptionType == each.planType) {
                          return (
                            <option key={index} data-key={each.id}>
                              {each.name} {each.duration}
                              {each.choosedUnit}
                            </option>
                          );
                        }
                      })}
                    </FormSelect>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="form-group">
                    <label htmlFor="userContact">Subscription End Date</label>
                    <br />
                    {subscriptionID === 0 ? (
                      <span></span>
                    ) : (
                      <EndDate
                        showsubScription={showsubScription}
                        subscriptionID={subscriptionID}
                      />
                    )}
                  </Col>
                </Row>

                <Button
                  theme="accent"
                  onClick={(e) => {
                    setId((prevState) => prevState + 1);
                    handleButton(e);
                  }}
                >
                  Save
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

const EndDate = ({ showsubScription, subscriptionID }) => {
  const subsPack = showsubScription.find((x) => x.id == subscriptionID);
  if ([subsPack].length != 1) {
    return <div></div>;
  }

  const num = subsPack.duration;

  const durType = subsPack.choosedUnit;

  return <div>{moment().add(num, durType).toDate().toString()}</div>;
};
export default CreateUser;
