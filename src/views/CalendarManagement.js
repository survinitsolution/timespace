import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormSelect,
  Button,
  NavLink,
  FormGroup,
  FormInput,
  FormCheckbox
} from "shards-react";
import "react-google-flight-datepicker/dist/main.css";
import PageTitle from "../components/common/PageTitle";
import AddNewCalendar from "../components/modals/AddNewCalendar";
import "../assets/style.css";
import EditCalendar from "../components/modals/EditCalendar";
import ViewCalendar from "../components/modals/ViewCalendar";
import { Link } from "react-router-dom";
import ToggleButtons from "../components/components-overview/ToggleButtons";

const fetchCalendarData = [
  {
    id: 1,
    calendarName: "IPL Calendar ",
    location: {
      all: false,
      state: "Himachal Pradesh",
      district: "Shimla",
    },
    admin: "davidson",
    startDate: "22-02-2021",
    endDAte: "28-02-2021",
    category: "Sports",
    tags: ["Cricket"],
    details: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    calendarName: "Dharmik Panchangam",
    location: {
      all: true,
      state: "",
      district: "",
    },
    category: "Panchnaga",
    admin: "John doe",
    startDate: "22-02-2021",
    endDAte: "28-02-2021",
    tags: ["Hindu"],
    details: "Lorem ipsum dolor sit amet",
  },
];

const CalendarManagement = () => {
  const [checked, setChecked]= useState(true)
  const [calendarData, setCalendarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [editID, setEditID] = useState(0);
  const [viewID, setViewID] = useState(0);
  const [searchCalanderName, setSearchCalendarName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchAdmin, setSearchAdmin] = useState("");
  const [filterCalendarData, setFilterCalendarData] = useState([]);

  const handleCreateUser = () => {
    setModal1(true);
  };
  const handleEditEvent = (id) => {
    console.log("Hello from edit");
    setModal2(true);
    setEditID(id);
  };
  const handleViewEvent = (id) => {
    setViewID(id);
    setModal3(true);
  };
  const calendarNameFIlterFunction = ({ calendarName }) =>
    calendarName.toUpperCase().includes(searchCalanderName.toUpperCase());
  const locationFilterFunction = ({ location }) =>
    location.toUpperCase().includes(searchLocation.toUpperCase());
  const adminFilterFunction = ({ admin }) =>
    admin.toUpperCase().includes(searchAdmin.toUpperCase());
  const handleSearch = () => {
    const filterData = calendarData
      .filter(calendarNameFIlterFunction)
      .filter(locationFilterFunction)
      .filter(adminFilterFunction);
    setFilterCalendarData(filterData);
  };
  const handleClear = () => {
    setSearchAdmin("");
    setSearchLocation("");
    setSearchCalendarName("");
    setFilterCalendarData(calendarData);
  };
  const handleDelete = (id) => {
    const result = window.confirm(
      "Are you sure you want to delete this account"
    );
    if (result) {
      setFilterCalendarData((prevState) => prevState.filter((x) => x.id != id));
    }
  };
  const handleToggle = (id) =>{
    alert(id)
    if(filterCalendarData.find((x) => x.id == id)){
      setChecked(!checked)
    }
  } 
  useEffect(() => {
    setCalendarData(fetchCalendarData);
    setFilterCalendarData(fetchCalendarData);
    setIsLoading(false);
  }, []);
  console.log(filterCalendarData.find((x) => x.id == 0));
  if (isLoading) {
    return <div>Please Wait</div>;
  }
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Calendar Management"
          subtitle="Calendar"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Manage Calendars</h6>
              <Button
                size="md"
                theme="secondary"
                className="d-flex ml-auto ml-auto ml-sm-auto mr-sm-2 mt-3 mt-sm-0"
                onClick={handleCreateUser}
              >
                <i className="material-icons mr-2">add</i> Add New Calendar
              </Button>
              <NavLink
                size="md"
                theme="primary"
                className=" rounded"
                style={{
                  backgroundColor: "#f84646",
                  color: "#fff",
                  borderRadius: "6px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                to="/upload-csv"
                tag={Link}
                className="d-flex  mr-sm-0 mt-3 mt-sm-0"
              >
                Upload CSV
              </NavLink>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <Col>
                <Row className="border-bottom align-items-center px-3 py-2 bg-light">
                  <Col md="6" className="mt-2 mb-sm-0">
                    <FormGroup
                      inline
                      className="d-flex mb-0 align-items-center"
                    >
                      <FormInput
                        id="feLastName"
                        placeholder="Calendar Name"
                        className="mr-1"
                        defaultValue={searchCalanderName}
                        onChange={(e) => setSearchCalendarName(e.target.value)}
                      />
                      <FormInput
                        placeholder="Location"
                        className="mr-1"
                        defaultValue={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                      />
                      <FormInput
                        placeholder="Admin"
                        className="mr-1"
                        defaultValue={searchAdmin}
                        onChange={(e) => setSearchAdmin(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="1">
                    <Button
                      size="sm"
                      theme="secondary"
                      className="d-flex mr-auto mr-sm-auto mt-3 mt-sm-0"
                      onClick={() => {
                        handleSearch();
                      }}
                    >
                      Search
                    </Button>
                  </Col>
                  <Col md="1">
                    <Button
                      size="sm"
                      theme="secondary"
                      className="d-flex mr-auto mr-sm-auto mt-3 mt-sm-0"
                      onClick={() => {
                        handleClear();
                      }}
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
                      Sr.No
                    </th>
                    <th scope="col" className="border-0">
                      Calendar Name
                    </th>
                    <th scope="col" className="border-0">
                      Location
                    </th>
                    <th scope="col" className="border-0">
                      Categories
                    </th>
                    <th scope="col" className="border-0">
                      Admin
                    </th>
                    <th>Status</th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterCalendarData.map((item, i) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.calendarName}</td>
                      {item.location.all ? (
                        <td>All</td>
                      ) : (
                        <td>
                          {item.location.state}|{item.location.district}
                        </td>
                      )}
                      <td>{item.category}</td>
                      <td>{item.admin}</td>
                      <td><FormCheckbox
                          toggle
                          checked={checked}
                          onChange={()=>handleToggle(item.id)}
                          >
                        </FormCheckbox>
                      </td>
                      <td className="d-flex align-items-center">
                        <Button
                          pill
                          size="sm"
                          theme="secondary"
                          className="mr-1"
                          onClick={() => handleEditEvent(item.id)}
                        >
                          <i className="material-icons">edit</i>
                        </Button>
                        <Button
                          pill
                          size="sm"
                          theme="info"
                          className="mr-1"
                          onClick={() => handleViewEvent(item.id)}
                        >
                          <i className="material-icons">visibility</i>
                        </Button>
                        <Button
                          pill
                          size="sm"
                          theme="primary"
                          onClick={() => handleDelete(item.id)}
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
        <AddNewCalendar
          onClick={() => setModal1(false)}
          classNames={
            modal1
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
          calendarData={calendarData}
          setFilterCalendarData={setFilterCalendarData}
        />

        <EditCalendar
          onClick={() => {
            setModal2(false);
            setEditID(0);
          }}
          sendData={filterCalendarData.find((x) => x.id == editID)}
          setCalendarData={setCalendarData}
          classNames={
            modal2
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <ViewCalendar
          onClick={() => {
            setModal3(false);
            setViewID(0);
          }}
          sendData={filterCalendarData.find((x) => x.id == viewID)}
          classNames={
            modal3
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
      </Row>
    </Container>
  );
};

export default CalendarManagement;
