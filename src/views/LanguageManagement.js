import React, { useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormCheckbox,
  FormInput,
  Button,
  CardBody,
  FormTextarea,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";

import "../assets/style.css";
const LanguageTypeTitle = (props) => {
  return (
    <label className="font-weight-bold border-bottom d-block pb-3">
      {props.title}
    </label>
  );
};

const LanguageManagement = () => {
  const [availableLanguages, setAvailableLanguages] = useState([
    {
      id: 1,
      language: "English",
    },
    {
      id: 2,
      language: "Kannad",
    },
    {
      id: 3,
      language: "Tamil",
    },
    {
      id: 4,
      language: "Marathi",
    },
  ]);
  const [translateSntnc,setTranslateSntnc] = useState({})
  const [transLateData, setTranslateData] = useState([]);
  const [changeID,setChangeID] = useState(0)
const handleOnchange =(e,language,id)=>{
  console.log(changeID)
  
    return setTranslateSntnc((prevState)=>prevState[language]==e.target.value)
  
}
console.log(translateSntnc)
const handleSave = ()=>{
  console.log(translateSntnc)
}
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Language Management"
          subtitle="Language"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Translate Language</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Row form>
                      {availableLanguages.map((each, i) => {
                        return (
                          <Col md="6" className="form-group" id={i}>
                            <label>{each.language}</label>
                            <FormTextarea onChange={(e)=>{
                              
                              handleOnchange(e,each.language,each.id)}}/>
                          </Col>
                        );
                      })}
                    </Row>
                    <Button theme="primary" onClick={()=>handleSave()}>Save</Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>

        <Col sm="12 mt-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Languages List</h6>
            </CardHeader>
            <CardBody className="p-0">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      English
                    </th>
                    <th scope="col" className="border-0">
                      Kannad
                    </th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Welcome</td>
                    <td>Welcome</td>
                    <td className="d-flex align-items-center">
                      <Button
                        size="sm"
                        pill
                        className="mr-1"
                        theme="success"
                        onClick={() => {}}
                      >
                        <i className="material-icons">edit</i>
                      </Button>
                      <Button
                        size="sm"
                        pill
                        theme="primary"
                        onClick={() =>
                          window.confirm(
                            "Are you sure you want to delete this account"
                          )
                        }
                      >
                        <i className="material-icons">delete</i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LanguageManagement;
