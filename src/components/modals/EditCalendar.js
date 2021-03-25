import React, { useEffect, useState } from "react";
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
  FormSelect,
  FormCheckbox,
} from "shards-react";
import Modal from "../common/Modal";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});
const EditCalendar = (props) => {
  const classes = useStyles();
  const [sendData, setSendData] = useState([]);
  const [tagData, setTagData] = useState("");
  const [newtags, setNewTag] = useState([]);
  const [myCSV,setMyCSV] = useState()
  const [calendarName, setcalendarName] = useState("");
  const [location, setLocation] = useState({
    all: false,
    state: "",
    district: "",
  });
  const [category, setCategory] = useState("");
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
    if (props.sendData == undefined) {
      return setSendData([]);
    } else {
      setSendData([props.sendData]);
      setNewTag(props.sendData.tags);
    }
  }, [props.sendData]);
  return (
    <div>
      {sendData.map((each, id) => {
        return (
          <Modal
            containModalSize="bd-example-modal-lg"
            modalSize="modal-lg"
            key={id}
            classNames={props.classNames}
            title="Edit Calendar"
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
                            <label htmlFor="spaceName">Calendar Name</label>
                            <FormInput
                              placeholder="Calendar Name"
                              defaultValue={each.calendarName}
                              onChange={(e) => setcalendarName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <Row>
                            <Col md="5">
                              <FormGroup>
                                <label>State</label>
                                <Autocomplete
                                  id="country-select-demo"
                                  style={{ width: "100%" }}
                                  size="small"
                                  options={props.calendarData}
                                  classes={{
                                    option: classes.option,
                                  }}
                                  autoHighlight
                                  getOptionLabel={(option) =>
                                    option.calendarName
                                  }
                                  onChange={(e, value) => {
                                    setLocation((prevState) => {
                                      return {
                                        ...prevState,
                                        state: value,
                                        all: false,
                                      };
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Choose a state"
                                      variant="outlined"
                                      defaultValue={each.location.state}
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
                                      }}
                                    />
                                  )}
                                />
                              </FormGroup>
                            </Col>
                            <Col md="5">
                              <FormGroup>
                                <label>District</label>
                                <Autocomplete
                                  id="country-select-demo"
                                  style={{ width: "100%" }}
                                  size="small"
                                  options={each}
                                  classes={{
                                    option: classes.option,
                                  }}
                                  onChange={(e, value) => {
                                    setLocation((prevState) => {
                                      return {
                                        ...prevState,
                                        district: value,
                                        all: false,
                                      };
                                    });
                                  }}
                                  autoHighlight
                                  getOptionLabel={(option) =>
                                    option.calendarName
                                  }
                                  defaultValue={each.location.district}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      defaultValue={each.location.district}
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
                            <Col md="2">
                              <label>All Location</label>
                              <fieldset>
                                <FormCheckbox
                                  small
                                  checked={each.location.all}
                                  onChange={(e, value) => {
                                    setLocation((prevState) => {
                                      return {
                                        ...prevState,
                                        district: "",
                                        state: "",
                                        all: !prevState.all,
                                      };
                                    });
                                  }}
                                >
                                  All
                                </FormCheckbox>
                              </fieldset>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      {/* Add Tags */}
                      <Row>
                        <Col sm="8">
                          <label>Tags</label>
                          <FormInput
                            placeholder="Tag Name"
                            value={tagData}
                            onChange={(e) => setTagData(e.target.value)}
                          />
                        </Col>
                        <Col sm="4" className="pt-2">
                          <Button
                            className="mt-4"
                            onClick={() => handleSetTagData()}
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
                                  style={{ cursor: "pointer" }}
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
                        <Col sm="8">
                          <label>Category</label>
                          <FormInput
                            placeholder="Category"
                            defaultValue={each.category}
                            onChange={(e) => setCategory(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "20px" }}>
                        <Col md="6">
                          <label>Upload CSV</label>
                          <input
                            type="file"
                            name="StateData"
                            onChange={(e) => setMyCSV(e.target.files[0])}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mt-4">
                          <Button theme="accent">Update</Button>
                        </Col>
                      </Row>
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

export default EditCalendar;
