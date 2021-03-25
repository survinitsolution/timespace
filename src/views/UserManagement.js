import React, { useEffect, useState } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormSelect,
  FormCheckbox,
  Button,
  FormInput,
  FormGroup,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CreatUser from "../components/modals/CreateUser";
import EditUser from "../components/modals/EditUser";
import ViewUser from "../components/modals/ViewUser";
import NotificationUser from "../components/modals/NotificationUser";


const UserManagement = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [showEditUserID, setShowEditUserID] = useState(0);
  const [showViewUserId, setShowViewUserId] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [subscriptionFilter, setSubscriptionFilter] = useState("");
  const [AdministratedFilter, setAdministratedFilter] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [clearFilter, setClearFilter] = useState(0);
  const [userData, setUserData] = useState([]);
  const userDatas = [
    {
      id: 1,
      name: "John",
      mobNumber: 7578948786,
      language: "English",
      status: "Approved",
      subscription: "Free",
      admin: "Puran",
      isChecked: false,
      userType: "Tester",
    },
    {
      id: 2,
      name: "Kerry",
      mobNumber: 784598652,
      language: "Kannad",
      status: "Pending",
      subscription: "Paid",
      admin: "John",
      isChecked: false,
      userType: "Regular User",
    },
    {
      id: 3,
      name: "Ajay",
      mobNumber: +907585859696,
      language: "English",
      status: "Pending",
      subscription: "Paid",
      admin: "Garry",
      isChecked: false,
      userType: "Regular User",
    },
    {
      id: 4,
      name: "John doe",
      mobNumber: +915823651525,
      language: "English",
      status: "Approved",
      subscription: "Free",
      admin: "John",
      isChecked: false,
      userType: "Admin",
    },
  ];
  
  useEffect(()=>{
    setUserData((prevState)=>{
      const filteredData = userDatas.filter((x)=>x.status!=='Pending')
      return filteredData
    })
    setIsLoading(false)
  },[])
  const handleDelete = (id) => {
    setUserData((prevState) => {
      return prevState.filter((x) => x.id !== id);
    });
  };
  const handleCreateUser = () => {
    setModal(true);
  };
  const handleEditUser = (id) => {
    setShowEditUserID(id);
    setModal2(true);
  };
  const handleViewUser = (id) => {
    setShowViewUserId(id);
    setModal3(true);
  };
  const handleNotificationUser = () => {
    setModal4(true);
  };
  const handleAllChecked = (e) => {
    console.log(e.target.checked);
    setUserData((prevState) =>
      prevState.map((x) => {
        return { ...x, isChecked: e.target.checked };
      })
    );
  };
  const handleCheckBox = (e, id) => {
    console.log(id);
    const elementIndex = userData.findIndex((ele) => ele.id == id);
    const newUserData = [...userData];
    newUserData[elementIndex] = {
      ...newUserData[elementIndex],
      isChecked: e.target.checked,
    };
    setUserData(newUserData);
  };
  const nameFilterFunction = ({ name }) =>
    name.toUpperCase().includes(nameFilter.toUpperCase());
  const subscriptionFilterFunction = ({ status }) =>
    status.toUpperCase().includes(subscriptionFilter.toUpperCase()) &&
    subscriptionFilter != "Subscription Status";
  const AdministratedFilterFunction = ({ admin }) =>
    admin.toUpperCase().includes(AdministratedFilter.toUpperCase()) &&
    AdministratedFilter != "Administrated By";
  const handleFilter = () => {
    const filteredData = userData
      .filter(nameFilterFunction)
      .filter(subscriptionFilterFunction)
      .filter(AdministratedFilterFunction);
    //.filter(subscriptionFilterFunction).filter(AdministratedFilterFunction)
    console.log(filteredData);
    setUserData(filteredData);
  };
  const handleClearFilter = () => {
    window.location.reload();
  };
  if(isLoading){
    return(
      <div>Please Wait...</div>
    )
  }
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="User Management"
          subtitle="Users"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Active Users</h6>
              <Button
                size="sm"
                theme="primary"
                className="d-flex btn-white ml-auto ml-sm-auto mr-2 mt-3 mt-sm-0"
                onClick={handleNotificationUser}
              >
                Notification to User
              </Button>
              <Button
                size="sm"
                theme="warning"
                className="d-flex mr-sm-0 mr-md-2 mt-3 mt-sm-0"
              >
                Download Csv
              </Button>
              <Button
                size="sm"
                theme="primary"
                className="d-flex mr-sm-0 mt-3 mt-sm-0"
                onClick={handleCreateUser}
              >
                Create User
              </Button>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <Col>
                <Row className="border-bottom px-3 py-2 bg-light">
                  <Col sm="4" className="d-flex mb-2 mb-sm-0">
                    <RangeDatePicker
                      startDate={new Date()}
                      endDate={new Date()}
                      minDate={new Date(1900, 0, 1)}
                      maxDate={new Date(2100, 0, 1)}
                      monthFormat="MMM YYYY"
                      startDatePlaceholder="Start Date"
                      endDatePlaceholder="End Date"
                      disabled={false}
                      className="my-own-class-name"
                      startWeekDay="monday"
                    />
                  </Col>
                  <Col md="6" className="mt-2 mb-sm-0">
                    <FormGroup
                      inline
                      className="d-flex mb-0 align-items-center"
                    >
                      <FormInput
                        id="feLastName"
                        placeholder="Search Name"
                        className="mr-1"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                      />
                      <FormSelect
                        className="mr-1"
                        onChange={(e) => setSubscriptionFilter(e.target.value)}
                      >
                        <option>Subscription Status</option>
                        <option>Approved</option>
                        <option>Pending </option>
                        <option>Expired</option>
                        <option>Due</option>
                      </FormSelect>
                      <FormSelect
                        className="mr-1"
                        onChange={(e) => setAdministratedFilter(e.target.value)}
                      >
                        <option>Administrated By</option>
                        <option>Super Admin</option>
                        <option>John</option>
                        <option>Garry</option>
                        <option>Nicholas</option>
                        <option>Puran</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                  <Col md="1">
                    <Button
                      size="sm"
                      theme="secondary"
                      className="d-flex mr-auto mr-sm-auto mt-3 mt-sm-0"
                      onClick={() => handleFilter()}
                    >
                      Search
                    </Button>
                  </Col>
                  <Col md="1">
                    <Button
                      size="sm"
                      theme="primary"
                      className="d-flex mr-auto mr-sm-auto mt-3 mt-sm-0"
                      onClick={() => handleClearFilter()}
                    >
                      Clear
                    </Button>
                  </Col>
                </Row>
              </Col>
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0 ">
                      <FormCheckbox onChange={(e) => handleAllChecked(e)}>
                        All
                      </FormCheckbox>
                    </th>
                    <th scope="col" className="border-0">
                      Name
                    </th>

                    <th scope="col" className="border-0">
                      Phone Number
                    </th>
                    <th scope="col" className="border-0">
                      User Type
                    </th>
                    <th scope="col" className="border-0">
                      Status
                    </th>
                    <th scope="col" className="border-0">
                      Subscription Type{" "}
                    </th>

                    <th scope="col" className="border-0">
                      Administrated by
                    </th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <FormCheckbox
                          checked={item.isChecked}
                          onChange={(e) => handleCheckBox(e, item.id)}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.mobNumber}</td>
                      <td>{item.userType}</td>
                      <td>{item.status}</td>
                      <td>{item.subscription}</td>
                      <td>{item.admin}</td>
                      <td className="d-flex align-items-center">
                        <Button
                          size="sm"
                          pill
                          className="mr-1"
                          theme="success"
                          onClick={() => handleEditUser(item.id)}
                        >
                          <i className="material-icons">edit</i>
                        </Button>
                        <Button
                          size="sm"
                          pill
                          theme="secondary"
                          className="mr-1"
                          onClick={() => handleViewUser(item.id)}
                        >
                          <i className="material-icons">visibility</i>
                        </Button>
                        <Button
                          size="sm"
                          pill
                          theme="primary"
                          onClick={() => {
                            const result = window.confirm(
                              "Are you sure you want to delete this account"
                            );
                            if (result) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          <i className="material-icons">delete</i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <CreatUser
          onClick={() => setModal(false)}
          setUserData={setUserData}
          classNames={
            modal
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <EditUser
          onClick={() => {
            setModal2(false);
            setShowEditUserID(0);
          }}
          sendData={userData.find((x) => x.id == showEditUserID)}
          classNames={
            modal2
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <ViewUser
          onClick={() => {
            setModal3(false);
            setShowViewUserId(0);
          }}
          sendData={userData.find((x) => x.id == showViewUserId)}
          classNames={
            modal3
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <NotificationUser
          onClick={() => setModal4(false)}
          classNames={
            modal4
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
      </Row>
    </Container>
  );
};

export default UserManagement;
