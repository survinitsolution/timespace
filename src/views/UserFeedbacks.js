import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormCheckbox,
  NavLink
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import ViewFeedback from "../components/modals/ViewFeedback";


const UserFeedbacks = () => {
  const [modal, setModal] = useState(false);
  const [viewDataID,setViewDataID] = useState(0)
  const [feedbackData,setFeedbackData] = useState([
    {
      id:1,
      name: "John",
      feedDate: "22-02-2021",
      feedType: "Appreciation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      status: "New",
      reply:""
    },
    {
      id:2,
      name: "Kerry",
      feedDate: "22-02-2021",
      feedType: "Complaint",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      status: "Replied",
      reply:"Thank You"
    },
    {
      id:3,
      name: "Ajay",
      feedDate: "22-02-2021",
      feedType: "Complaint",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      status: "Replied",
      reply:"Thank You"

    },
    {
      id:4,
      name: "John doe",
      feedDate: "22-02-2021",
      feedType: "Appreciation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      status: "Replied",
      reply:"Thank You"
    }
  ])
  const handleViewFeedback = (ids) => {
    // it will send id to viewfeedBack.js so that component will fetch data from db for perticular id
    setViewDataID(ids)
    setModal(true);
  };
  const handleDelete=(id)=>{
    // delete request
    setFeedbackData((prevState)=>prevState.filter(x=>x.id!==id))
    console.log(`ID number ${id} has been deleted`)

  }
  const handleReply=(id,reply)=>{
    const elementIndex = feedbackData.findIndex(item=>item.id==id)
    const copyFeedbackData = [...feedbackData]
    copyFeedbackData[elementIndex]={...copyFeedbackData[elementIndex],status:"Replied",reply:reply}
    console.log(copyFeedbackData)
    setFeedbackData(copyFeedbackData)
  }
  // useEffect(()=>{

  // },[])
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="User Feedback"
          subtitle="Feedbacks"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Active Users</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0 ">
                      <FormCheckbox>All</FormCheckbox>
                    </th>
                    <th scope="col" className="border-0">
                      User Name
                    </th>

                    <th scope="col" className="border-0">
                      Date of Feedback
                    </th>
                    <th scope="col" className="border-0">
                      Feedback Type
                    </th>
                    <th scope="col" className="border-0">
                      Feedback
                    </th>
                    <th scope="col" className="border-0">
                      Status
                    </th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feedbackData.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <FormCheckbox />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.feedDate}</td>
                      <td>{item.feedType}</td>
                      <td>{item.feedback.slice(50) + "..."}</td>
                      <td
                        style={{
                          color: item.status === "New" ? "#02d402" : "#666"
                        }}
                      >
                        {item.status}
                      </td>
                      <td className="d-flex align-items-center">
                        <NavLink
                          className="nav-link-icon text-center"
                          onClick={()=>handleViewFeedback(item.id)}
                          style={{cursor:'pointer'}}
                        >
                          <div
                            className="nav-link-icon__wrapper text-secondary"
                            style={{ fontSize: 1.4 + "rem" }}
                          >
                            <i className="material-icons">visibility</i>
                          </div>
                        </NavLink>
                        <NavLink
                          className="nav-link-icon text-center"
                          onClick={()=>handleDelete(item.id)}
                          style={{cursor:'pointer'}}

                        >
                          <div
                            className="nav-link-icon__wrapper text-secondary"
                            style={{ fontSize: 1.4 + "rem" }}
                          >
                            <i className="material-icons" >delete</i>
                          </div>
                        </NavLink>
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
        <ViewFeedback
          onClick={() => {setModal(false)
          setViewDataID(0)}}
          classNames={modal ? "modal faded d-block" : "modal faded"}
          sendData = {feedbackData.find(x=>x.id===viewDataID)}
          handleReply = {handleReply}
        />
      </Row>
    </Container>
  );
};

export default UserFeedbacks;
