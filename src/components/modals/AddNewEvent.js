import React, { useCallback, useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormInput,
  Button,
  Badge,
  FormCheckbox,
} from "shards-react";

import Modal from "../common/Modal";
const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});
const AddNewEvent = (props) => {
  const classes = useStyles();
  const [tagData, setTagData] = useState("");
  const [newtags, setNewTag] = useState([]);
  const [eventName, setEventName] = useState("");
  const [title, SetTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [choosedCalenderID,setChoosedCalenderID] = useState(0)
  // from parent
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [calendars, setCalendars] = useState([]);
  //
  const handleSetTagData = () => {
    setNewTag((oldTags) => {
      return [...oldTags, tagData];
    });
    setTagData("");
  };

  const handleClose = (itemval) => {
    const remainTag = newtags.filter((x) => x !== itemval);
    setNewTag(remainTag);
  };
  useEffect(() => {
    setStates(props.stateData);
    setDistricts(props.districtData);
    setCalendars(props.calendarData);
  }, []);
  return (
    <Modal
      containModalSize="bd-example-modal-lg"
      modalSize="modal-lg"
      classNames={props.classNames}
      title="Add New Event"
      onClick={props.onClick}
    >
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="6">
                    <FormGroup>
                      <label htmlFor="spaceName">Event Name</label>
                      <FormInput
                        id="spaceName"
                        placeholder="Event Name"
                        value=""
                        onChange={(e) => setEventName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>State</label>
                          <Autocomplete
                            id="country-select-demo"
                            style={{ width: "100%" }}
                            size="small"
                            options={states}
                            classes={{
                              option: classes.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.name}
                            onChange={(e, value) => {
                              const filterStateID = states.find(
                                (x) => x.name == value
                              ).id;
                              setDistricts((prevState) =>
                                prevState.filter(
                                  (x) => x.state_id == filterStateID
                                )
                              );
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Choose a state"
                                variant="outlined"
                                inputProps={{
                                  ...params.inputProps,
                                  autoComplete: "new-password", // disable autocomplete and autofill
                                }}
                              />
                            )}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>District</label>
                          <Autocomplete
                            id="country-select-demo"
                            style={{ width: "100%" }}
                            size="small"
                            options={districts}
                            classes={{
                              option: classes.option,
                            }}
                            onChange={(e, value) => {
                              const filterDistrictID = districts.find(
                                (x) => x.name == value
                              );
                              setCalendars((prevState) =>
                                prevState.filter(
                                  (x) => x.location.district == filterDistrictID
                                )
                              );
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.calendarName}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Choose a district"
                                variant="outlined"
                                inputProps={{
                                  ...params.inputProps,
                                  autoComplete: "new-password", // disable autocomplete and autofill
                                }}
                              />
                            )}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <label>Calendar</label>
                    <Autocomplete
                      id="country-select-demo"
                      style={{ width: "100%" }}
                      size="small"
                      options={calendars}
                      classes={{
                        option: classes.option,
                      }}
                      autoHighlight
                      getOptionLabel={(option) => option.calendarName}
                      onChange={(e,value)=>{
                        const filterCalenderID = calendars.find(x=>x.calendarName==value).id
                        setChoosedCalenderID(filterCalenderID)
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a calendar"
                          variant="outlined"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <label className="font-weight-bold ">Details</label>
                  </Col>
                  <Col sm="12" className="form-group">
                    <ListGroup>
                      <ListGroupItem>
                        <FormInput
                          placeholder="Subtitle"
                          defaultValue = {title}
                          onChange={(e) => SetTitle(e.target.value)}
                        />
                        <FormInput
                          className="mt-2"
                          placeholder="Description"
                          defaultValue={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="10">
                    <label>Tags</label>
                    <FormInput
                      placeholder="Tag Name"
                      value={tagData}
                      onChange={(e) => setTagData(e.target.value)}
                    />
                  </Col>
                  <Col sm="2" className="pt-2">
                    <Button
                      className="mt-4"
                      onClick={handleSetTagData}
                      outline
                      theme="secondary"
                    >
                      Add More
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col sm="12">
                    {/* Tag List */}
                    {newtags.map((itemval, id) => {
                      return (
                        <Badge pill outline className="mr-2" key={id}>
                          {itemval}{" "}
                          <i
                            className="material-icons"
                            onClick={() => handleClose(itemval)}
                          >
                            close
                          </i>
                        </Badge>
                      );
                    })}
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <label>Start Date Time</label>
                    <Datetime onChange={(e) => setEventStartDate(e.todate())} />
                  </Col>
                  <Col md="6">
                    <label>End Date Time</label>
                    <Datetime onChange={(e) => setEventEndDate(e.toDate())} />
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-4">
                    <Button theme="accent">Save Event</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

export default AddNewEvent;
