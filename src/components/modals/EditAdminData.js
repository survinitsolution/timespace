import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup,
  FormInput,
  FormCheckbox,
  Button,
  FormSelect
} from "shards-react";
import Modal from "../common/Modal";

const EditAdminData = props => {
  const AdminID = props.editAdminID;
  //admin data fetch by id
  const [adminData, setAdminData] = useState({
    adminName: "Rahul",
    mobileNum: 9595959595,
    location: "Jainpur",
    role:"Sub Admin",
    permissions: {
      userApproval: true,
      viewUserSubscriptionPlanDate: false
    },
    calendars: []
  });
  //calendar data add by fetch
  const [calendars, setCalendars] = useState([
    {
      id: 1,
      calendar: "Calendar1"
    },
    {
      id: 2,
      calendar: "Calendar2"
    },
    {
      id: 3,
      calendar: "Calendar3"
    },
    {
      id: 4,
      calendar: "Calendar4"
    }
  ]);
  // useEffect(()=>{
  //   fetch admin data by admin id

  // },[])
  const handleOnChange = e => {
    setAdminData(prevState => {
      if (e.target.name === "adminName") {
        return {
          adminName: e.target.value,
          mobileNum: prevState.mobileNum,
          location: prevState.location,
          permissions: {
            userApproval: prevState.userApproval,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: prevState.calendars
        };
      } else if (e.target.name === "mobileNum") {
        return {
          adminName: prevState.adminName,
          mobileNum: e.target.value,
          location: prevState.location,
          permissions: {
            userApproval: prevState.userApproval,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: prevState.calendars
        };
      } 
      else if (e.target.name === "role") {
        return {
          adminName: prevState.adminName,
          mobileNum: prevState.mobileNum,
          location: prevState.location,
          role:e.target.value,
          permissions: {
            userApproval: prevState.userApproval,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: prevState.calendars
        };
      }else {
        return {
          adminName: prevState.adminName,
          mobileNum: prevState.mobileNum,
          role:prevState.role,
          location: e.target.value,
          permissions: {
            userApproval: prevState.adminName,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: prevState.calendars
        };
      }
    });
  };
  function handleAddEventCalendar(e, id, calendar) {
    console.log(id, calendar, e.target.checked);
    setAdminData(prevState => {
      if (e.target.checked) {
        return {
          adminName: prevState.adminName,
          mobileNum: prevState.mobileNum,
          location: prevState.location,
          role:prevState.role,
          permissions: {
            userApproval: prevState.userApproval,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: [...prevState.calendars, { id: id, calendar: calendar }]
        };
      } else {
        return {
          adminName: prevState.adminName,
          mobileNum: prevState.mobileNum,
          location: prevState.location,
          role:prevState.role,
          permissions: {
            userApproval: prevState.userApproval,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: prevState.calendars.filter(x => x.id !== id)
        };
      }
    });
  }

  function handlePermissions(e) {
    return setAdminData(prevState => {
      if (e.target.name === "userApproval") {
        return {
          adminName: prevState.adminName,
          mobileNum: prevState.mobileNum,
          location: prevState.location,
          role:prevState.role,
          permissions: {
            userApproval: e.target.checked,
            viewUserSubscriptionPlanDate:
              prevState.permissions.viewUserSubscriptionPlanDate
          },
          calendars: prevState.calendars
        };
      } else {
        return {
          adminName: prevState.adminName,
          mobileNum: prevState.mobileNum,
          location: prevState.location,
          role:prevState.role,
          permissions: {
            userApproval: prevState.permissions.userApproval,
            viewUserSubscriptionPlanDate: e.target.checked
          },
          calendars: prevState.calendars
        };
      }
    });
  }
  const handleUpdate = () => {
    console.log(adminData);
  };
  return (
    <Modal
      classNames={props.classNames}
      title="Edit Admin"
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
                      <strong>Admin Name</strong>
                    </label>
                    <FormInput
                      type="text"
                      placeholder="Admin Name"
                      name="adminName"
                      defaultValue={adminData.adminName}
                      onChange={e => handleOnChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="d-block">
                      <strong>Mobile Number</strong>
                    </label>
                    <FormInput
                      type="text"
                      placeholder="Mobile Number"
                      name="mobileNum"
                      defaultValue={adminData.mobileNum}
                      onChange={e => handleOnChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="d-block">
                      <strong>Location</strong>
                    </label>
                    <FormInput
                      type="text"
                      placeholder="Location"
                      name="location"
                      defaultValue={adminData.location}
                      onChange={e => handleOnChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="d-block">
                      <strong>Role</strong>
                    </label>
                    <FormSelect
                      id="feInputState"
                      defaultValue={adminData.role}
                      name="role"
                      onChange={e => handleOnChange(e)}
                    >
                      <option>Super Admin Clone</option>
                      <option>Sub Admin</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup>
                    <label className="d-block">
                      <strong>Permissions</strong>
                    </label>
                    <fieldset>
                      <FormCheckbox
                        small
                        name="userApproval"
                        onChange={e => handlePermissions(e)}
                        checked={adminData.permissions.userApproval}
                      >
                        User Approval
                      </FormCheckbox>
                      <FormCheckbox
                        small
                        onChange={e => handlePermissions(e)}
                        name="viewUserSubscriptionPlanDate"
                        checked={
                          adminData.permissions.viewUserSubscriptionPlanDate
                        }
                      >
                        View User Subscription Plan Date
                      </FormCheckbox>
                    </fieldset>
                  </FormGroup>

                  <FormGroup>
                    <label className="d-block">
                      <strong>Add Event in Calendar</strong>
                    </label>
                    <fieldset>
                      {calendars.map((each, id) => {
                        return (
                          <div key={id}>
                            <FormCheckbox
                              small
                              name={each.calendar}
                              checked={
                                adminData.calendars.length === 0
                                  ? false
                                  : adminData.calendars.some(
                                      x => x.calendar === each.calendar
                                    )
                                  ? true
                                  : false
                              }
                              onChange={e =>
                                handleAddEventCalendar(
                                  e,
                                  each.id,
                                  each.calendar
                                )
                              }
                            >
                              {each.calendar}
                            </FormCheckbox>
                          </div>
                        );
                      })}
                    </fieldset>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className="mt-2 px-0">
          <Button size="md" theme="primary" onClick={() => handleUpdate()}>
            Update
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

export default EditAdminData;
