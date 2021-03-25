import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  NavLink
} from "shards-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import "../assets/style.css";
const customfilelabel = {
  textAlign: "center",
  height: "100%",
  fontSize: "2rem"
};

const UploadCsv = () => {
  const [imageFiles, setImageFiles] = useState("");

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Upload Csv"
          subtitle="Csv"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Choose Csv File</h6>
            </CardHeader>
            <CardBody className="p-0 pt-5 pb-3">
              <Row>
                <Col md="5" className="mx-auto">
                  <div
                    className="custom-file mb-3"
                    style={{
                      height: "150px",
                      borderStyle: "dashed",
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: "#ddd"
                    }}
                  >
                    <input
                      type="file"
                      multiple
                      accept=".xls,.xlsx,.csv"
                      onChange={e => setImageFiles(e.target.files)}
                      id="customFile2"
                    />
                    <label
                      className="custom-file-label custom_labelFile d-flex border-0 align-items-center justify-content-center"
                      style={customfilelabel}
                      htmlFor="customFile2"
                    >
                      <i className="material-icons mr-3">text_snippet</i>
                      {imageFiles === ""
                        ? "Choose File"
                        : imageFiles.length <= 1
                        ? `${imageFiles.length} file Selected`
                        : `${imageFiles.length} files Selected`}
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="5" className="mx-auto text-center">
                  <Button
                    size="md"
                    theme="primary"
                    className="d-inline align-items-center justify-content-between mb-2 mt-3"
                  >
                    <i
                      className="material-icons mr-2"
                      style={{ fontSize: 1.2 + "rem" }}
                    >
                      backup
                    </i>{" "}
                    Upload Files{" "}
                  </Button>

                  <NavLink
                    size="md"
                    theme="secondary"
                    to="/calendar-management"
                    tag={Link}
                    className="d-flex align-items-center  mr-sm-0 mt-3 mt-sm-0"
                  >
                    <i className="material-icons mr-2">arrow_back</i> Calendar
                    Management
                  </NavLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadCsv;
