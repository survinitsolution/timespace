import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  FormCheckbox,
  Form,
  FormInput,
  Row,
  CardHeader,
  CardBody,
  CardFooter,
  NavLink
} from "shards-react";
import ViewAdmin from "../modals/ViewAdmin";
import CreateAdmin from "../modals/CreateAdmin";
import EditAdminData from "../modals/EditAdminData";
import ResetAdminPassword from "../modals/ResetAdminPassword";

const userData = [
  {
    id: 1,
    adminName: "John",
    mobNumber: 7578948786,
    location: "Maysoor",
    permissions: ["User Approval"]
  },
  {
    id: 2,
    adminName: "Kerry",
    mobNumber: 784598652,
    location: "Kannad",
    permissions: ["User Approval", "Add Event in calendar"]
  },
  {
    id: 3,
    adminName: "Ajay",
    mobNumber: +907585859696,
    location: "Maysoor",
    permissions: ["Add Event in calendar"]
  }
];

const ManageAdmin = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [adminData,setAdminData] = useState([])
  const [resetPasswordUserID, setresetPasswordUserID] = useState(0);
  const [editAdminID, setEditAdminID] = useState(0);
  const [viewAdminID,setViewAdminID]= useState(0)
  const handleCreateAdmin = () => {
    setModal1(true);
  };
  const handleEditAdmin = id => {
    setModal2(true);
    setEditAdminID(id);
  };

  const handleViewAdmin = (id) => {
    setViewAdminID(id)
    setModal3(true);
  };
  const handleResetPass = id => {
    setModal4(true);
    setresetPasswordUserID(id);
  };
  const handleAddAdmin=(data)=>{
    setAdminData((prevData)=>{
      return prevData.concat(data)
    })
  }
  useEffect(()=>{
    setAdminData(userData)
  },[])
  return (
    <>
      <Row className="border-bottom px-3 py-2 bg-light">
        <Col sm="1" className="d-flex mt-1 mb-sm-0"></Col>
        <Col md="3" className="form-group mb-2 mb-sm-0"></Col>
        <Col>
          <Button
            size="sm"
            theme="primary"
            className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
            onClick={handleCreateAdmin}
          >
            Create Admin
          </Button>
        </Col>
      </Row>
      <Row>
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">
                Admin Name
              </th>

              <th scope="col" className="border-0">
                Contact Number
              </th>
              <th scope="col" className="border-0">
                Location
              </th>
              <th scope="col" className="border-0">
                Permissions
              </th>
              <th scope="col" className="border-0">
                Password
              </th>
              <th scope="col" className="border-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {adminData.map((item, i) => (
              <tr key={i}>
                <td>{item.adminName}</td>
                <td>{item.mobNumber}</td>
                <td>{item.location}</td>
                <td style={{ width: "340px" }}>{item.permissions}</td>
                <td>
                  <Button size="sm" onClick={() => handleResetPass(item.id)}>
                    Reset
                  </Button>
                </td>
                <td className="d-flex align-items-center">
                  <Button
                    className="mr-2"
                    size="sm"
                    pill
                    theme="secondary"
                    onClick={() => handleEditAdmin(item.id)}
                  >
                    <i className="material-icons">edit</i>
                  </Button>
                  <Button size="sm" pill theme="info" onClick={()=>handleViewAdmin(item.id)}>
                    <i className="material-icons">visibility</i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>

      <Row>
        <CreateAdmin
          onClick={() => setModal1(false)}
          handleAddAdmin={handleAddAdmin}
          classNames={
            modal1
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <EditAdminData
          onClick={() => {
            setModal2(false);
            setEditAdminID(0);
          }}
          editAdminID={editAdminID}
          classNames={
            modal2
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <ViewAdmin
          onClick={() => {setModal3(false)
          setViewAdminID(0)}}
          viewAdminID = {viewAdminID}
          sendData = {adminData.find(element=>element.id==viewAdminID)}
          classNames={
            modal3
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
        <ResetAdminPassword
          onClick={() => {
            setModal4(false);
            setresetPasswordUserID(0);
          }}
          resetPasswordUserID={resetPasswordUserID}
          classNames={
            modal4
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
      </Row>
    </>
  );
};

export default ManageAdmin;
