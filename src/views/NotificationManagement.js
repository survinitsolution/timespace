import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ListGroup,
  CardFooter,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import NotificationManageFields from "../components/components-overview/NotificationManageFields";
import NotificationDataFields from "../components/components-overview/NotificationManagementView";
const notificManageData = [
  {
    id: 1,
    title: "Welcome to timespace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Subscription Due ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Welcome to timespace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const NotificationManagement = () => {
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationDescription, setNotificationDescription] = useState("");
  const [notificationData, setNotificationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const handleSave = () => {
    const newData = {
      title: notificationTitle,
      description: notificationDescription,
    };
    setNotificationData((prevState) => [...prevState, newData]);
    console.log(notificationTitle, notificationDescription);
  };
  const handleUpdate = (id) => {
    const elementIndex = notificationData.findIndex((x) => x.id == id);
    console.log(elementIndex)
    const newArray = [...notificationData];
    if (updateTitle != "") {
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        title: updateTitle,
      };
      console.log(newArray)
      setNotificationData(newArray);
    }
    if (updateDescription != "") {
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        description: updateDescription,
      };
      console.log(newArray)
      setNotificationData(newArray);
    }
  };
  const handleDelete = (id)=>{
    setNotificationData((prevState)=>prevState.filter(x=>x.id!=id))
  }
  useEffect(() => {
    setNotificationData(notificManageData);
    setIsLoading(false);
  },[]);
  if (isLoading) {
    return <div>Please Wait...</div>;
  }
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Notification Management"
          subtitle="Notification"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Manage Notification</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <ListGroup flush>
                <NotificationManageFields
                  notificationTitle="Title"
                  notificationDescription="Description"
                  setNotificationTitle={setNotificationTitle}
                  setNotificationDescription={setNotificationDescription}
                />
              </ListGroup>
            </CardBody>
            <CardFooter>
              <Row className="justify-content-start">
                <Button
                  size="md"
                  theme="primary"
                  className="d-flex mt-3 mt-sm-0"
                  style={{ marginLeft: 25 }}
                  onClick={() => handleSave()}
                >
                  Save
                </Button>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      {notificationData.map((item, id) => {
        return (
          <NotificationDataFields
            notificationData={item}
            handleUpdate={handleUpdate}
            key={id}
            handleDelete={handleDelete}
            setUpdateTitle={setUpdateTitle}
            setUpdateDescription={setUpdateDescription}
            setNotificationData={setNotificationData}
          />
        );
      })}
    </Container>
  );
};

export default NotificationManagement;
