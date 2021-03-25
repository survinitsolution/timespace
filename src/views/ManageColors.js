import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  Row,
  Col,
  CardBody,
  CardFooter,
  Button,
  FormInput,
  FormGroup,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import EditColor from "../components/modals/EditColor";
import "../assets/style.css";
import axios from "axios";
import { API_URL } from "../api/apiUrl";
const ManageThemeColors = () => {
  const [update, setUpdate] = useState(false);
  const [themeName, setThemeName] = useState("");
  const [theme_color, setThemeColor] = useState("");
  const [text_color_code, setTextColorCode] = useState("");
  const [outer_color_code, setOuterColorCode] = useState("");
  const [inner_color_code, setInnerColorCode] = useState("");
  // const initialFormStateforUpdate = { updateThemeName: '', 
  // updateLineColor: '', updateTextColor: '', updatedOuterColorCode:'', updatedInnerColorCode:'' }
  //const [updatedtheme, setUpdateTheme] = useState(initialFormStateforUpdate)
  const [updateThemeName, setUpdateThemeName] = useState("");
  const [updateLineColor, setUpdateLineColor] = useState("");
  const [updateTextColor, setUpdateTextColor] = useState("");
  const [updatedOuterColorCode, setUpdatedOuterColorCode] = useState("");
  const [updatedInnerColorCode, setUpdatedInnerColorCode] = useState("");
  const [classUpdate, setClassUpdate] = useState(false);
  const [editID, setEditID] = useState(0);
  const [modal, setModal] = useState(false);
  const [themeData, setThemedata] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/themes`)
      .then((res) => setThemedata(res.data.data));
  }, [update]);
  const handleSave = () => {
    const uploadData = {
      name:themeName,
      line_color_code:theme_color,
     // theme_color: theme_color,
      text_color_code: text_color_code,
      button_outer_color_code:outer_color_code,
      button_inner_color_code:inner_color_code
    };
    console.log(uploadData)
    axios({
      method: "post",
      url: `${API_URL}/themes`,
      data: uploadData,
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => setUpdate((prevState) => !prevState));
  };
  const handleUpdate = (id) => {
   
    console.log(`update theme*****`, id)
    const elementIndex = themeData.findIndex((x) => x.id == id);
    const newArray = [...themeData];
 
    if (updateThemeName != "") {
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        themeName: updateThemeName,
      };
      setThemedata(newArray);
    }
    if (updateLineColor != "") {
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        lineColorCode: updateLineColor,
      };
      setThemedata(newArray);
    }
    if (updateTextColor != "") {
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        textColorCode: updateTextColor,
      };
      setThemedata(newArray);
   
    }

    if(updatedOuterColorCode !=""){
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        textColorCode: updatedOuterColorCode,
      };
    }
      setThemedata(newArray);
      if(updatedInnerColorCode !=""){
        newArray[elementIndex] = {
          ...newArray[elementIndex],
          textColorCode: updatedInnerColorCode,
        };
        setThemedata(newArray);
      console.log(`***********Update value`, newArray)
    }
    const updateTheme = {
      id:id,
      name:updateThemeName,
      line_color_code:updateLineColor,
     // theme_color: theme_color,
      text_color_code: updateTextColor,
      button_outer_color_code:updatedOuterColorCode,
      button_inner_color_code:updatedInnerColorCode
    };
    console.log(`i am ready for upadate****`, updateTheme)
    axios({
      method: "put",
      url: `${API_URL}/themes`,
      data: updateTheme, id,
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => setUpdate((prevState) => !prevState));
    setClassUpdate(false);
    setEditID(0);
  };
  const handelCancel = () => {
    setClassUpdate(false);
    setEditID(0);
  };
  const handleEdit = (id) => {
    console.log(`id for edit`, id)
    setClassUpdate(true);
    // setUpdateTheme({updateThemeName:item.themeName, updateLineColor:item., updateTextColor:item.,
  // updatedOuterColorCode:item., updatedInnerColorCode:item. })
    setEditID(id);
  };
  const handleDelete = (id) => {
    console.log(`id for delete`, id)
    const result = window.confirm(
      "Are you sure you want to delete this account"
    );
    axios({
      method: "DELETE",
      url: `${API_URL}/themes/`+`${id}`,
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => setUpdate((prevState) => !prevState));
    if (result) {
      setThemedata((prevData) => prevData.filter((x) => x.id !== id));
    }
  };
  const handleClose = () => {
    setThemeName("");
    setThemeColor("");
    setTextColorCode("");
  };
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Manage Colors"
          subtitle="Theme"
          className="text-sm-left"
        />
      </Row>
      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Manage Theme</h6>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="12" md="2">
                  <Card className="shadow-sm">
                    <CardHeader className="border-bottom bg-light  pt-2 mb-2 py-1">
                      <strong className=" d-block mb-2">Theme Name</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormInput
                          type="text"
                          placeholder="Theme Name"
                          value={themeName}
                          onChange={(e) => setThemeName(e.target.value)}
                        />
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12" md="2">
                  <Card className="shadow-sm">
                    <CardHeader className="border-bottom bg-light  pt-2 mb-2 py-1">
                      <strong className=" d-block mb-2">Theme Color</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormInput
                          type="color"
                          placeholder="#000000"
                          value={theme_color}
                          onChange={(e) => setThemeColor(e.target.value)}
                        />
                      <p style={{textAlign:'center'}}>  {theme_color}</p>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12" md="2">
                  <Card className="shadow-sm">
                    <CardHeader className="border-bottom bg-light  pt-2 mb-2 py-1">
                      <strong className=" d-block mb-2">Text Color</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormInput
                          type="color"
                          placeholder="#000000"
                          value={text_color_code}
                          onChange={(e) => setTextColorCode(e.target.value)}
                        />
                        {text_color_code}
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12" md="2">
                  <Card className="shadow-sm">
                    <CardHeader className="border-bottom bg-light  pt-2 mb-2 py-1">
                      <strong className=" d-block mb-2">Outer Color</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormInput
                          type="color"
                          placeholder="#000000"
                          value={outer_color_code}
                          onChange={(e) => setOuterColorCode(e.target.value)}
                        />
                        {outer_color_code}
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12" md="2">
                  <Card className="shadow-sm">
                    <CardHeader className="border-bottom bg-light  pt-2 mb-2 py-1">
                      <strong className=" d-block mb-2">Inner Color</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormInput
                          type="color"
                          placeholder="#000000"
                          value={inner_color_code}
                          onChange={(e) => setInnerColorCode(e.target.value)}
                        />
                      {inner_color_code}
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="1">
                  <Button theme="primary" onClick={handleClose}>
                    Clear
                  </Button>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <Button theme="primary" onClick={() => handleSave()}>
                Save
              </Button>
            </CardFooter>
          </Card>
        </Col>

        {/* COLOR MANAGE DATA LIST */}
        <Col sm="12 mt-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Theme Data</h6>
            </CardHeader>
            <CardBody className="py-0">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Theme Name
                    </th>
                    <th scope="col" className="border-0">
                      Theme color
                    </th>
                    <th scope="col" className="border-0">
                      Text Color
                    </th>
                    <th scope="col" className="border-0">
                      Outer Color
                    </th>
                    <th scope="col" className="border-0">
                      Inner Color
                    </th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>
                {themeData.map((item, id) => {
                  return (
                    <tbody key={id}>
                      {classUpdate && editID == item.id ? (
                        <tr>
                          <td>
                            <FormInput
                              type="text"
                              placeholder="Theme Name"
                              defaultValue={item.name}
                              onChange={(e) =>
                                setUpdateThemeName(e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <FormInput
                              type="text"
                              placeholder="Theme Color"
                              defaultValue={item.line_color_code}
                              onChange={(e) =>
                                setUpdateLineColor(e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <FormInput
                              type="text"
                              placeholder="Text Color"
                              defaultValue={item.text_color_code}
                              onChange={(e) =>
                                setUpdateTextColor(e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <FormInput
                              type="text"
                              placeholder="Outer Color"
                              defaultValue={item.button_outer_color_code}
                              onChange={(e) =>
                                setUpdatedOuterColorCode(e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <FormInput
                              type="text"
                              placeholder="Inner Color"
                              defaultValue={item.button_inner_color_code}
                              onChange={(e) =>
                                setUpdatedInnerColorCode(e.target.value)
                              }
                            />
                          </td>
                          <td className="d-flex align-items-center">
                            <Button
                              className="mr-1"
                              theme="primary"
                              onClick={() => handleUpdate(item.id)}
                            >
                              <i className="material-icons">update</i>
                            </Button>
                            <Button
                              className="mr-1"
                              theme="primary"
                              onClick={() => handelCancel()}
                            >
                              <i className="material-icons">cancel</i>
                            </Button>
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.line_color_code}</td>
                          <td>{item.text_color_code}</td>
                          <td>{item.button_outer_color_code}</td>
                          <td>{item.button_inner_color_code}</td>
                          <td className="d-flex align-items-center">
                            <Button
                              size="sm"
                              pill
                              className="mr-1"
                              theme="success"
                              onClick={() => handleEdit(item.id)}
                            >
                              <i className="material-icons">edit</i>
                            </Button>
                            <Button
                              size="sm"
                              pill
                              theme="primary"
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="material-icons">delete</i>
                            </Button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  );
                })}
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <EditColor
          onClick={() => setModal(false)}
          classNames={
            modal
              ? "modal  bd-example-modal-lg faded d-block"
              : "modal  bd-example-modal-lg faded"
          }
        />
      </Row>
    </Container>
  );
};

export default ManageThemeColors;
