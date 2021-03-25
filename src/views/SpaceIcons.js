import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import UploadedIconItem from "../components/components-overview/UploadedIconItem";
import "../assets/style.css";
const customfilelabel = {
  textAlign: "center",
  height: "100%",
  fontSize: "2rem",
};

let iconspaceData = [
  {
    id: 1,
    icon: "backup",
  },
  { id: 2, icon: "alarm" },
  { id: 3, icon: "arrow_circle_down" },
  { id: 4, icon: "notification_important" },
  { id: 5, icon: "speed" },
];

const SpaceIcons = () => {
  const [iconFiles, setIconFiles] = useState("");
  const [iconData, setIconData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const handleDelete = (id) => {
    const result = window.confirm(
      "Are you sure you want to delete this account"
    );
    if (result) {
      setIconData((prevData)=>prevData.filter(x=>x.id!=id))
    }
  };
  useEffect(() => {
    setIconData(iconspaceData);
    setIsLoading(false)
  }, []);
  if(isLoading){
    return <div>Please Wait...</div>
  }
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Space Icons"
          subtitle="Icons"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Manage Icons</h6>
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
                      borderColor: "#ddd",
                    }}
                  >
                    <input
                      type="file"
                      multiple
                      onChange={(e) => setIconFiles(e.target.files)}
                      id="customFile2"
                    />
                    <label
                      className="custom-file-label custom_labelFile d-flex border-0 align-items-center justify-content-center"
                      style={customfilelabel}
                      htmlFor="customFile2"
                    >
                      <i className="material-icons mr-3">perm_media</i>
                      {iconFiles === ""
                        ? "Choose File"
                        : iconFiles.length <= 1
                        ? `${iconFiles.length} file Selected`
                        : `${iconFiles.length} files Selected`}
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="5" className="mx-auto text-center">
                  <Button
                    size="md"
                    theme="primary"
                    className=" align-items-center justify-content-between mb-2 mt-3"
                  >
                    <i
                      className="material-icons mr-2"
                      style={{ fontSize: 1.2 + "rem" }}
                    >
                      backup
                    </i>{" "}
                    Upload Files{" "}
                  </Button>
                </Col>
              </Row>
              <Container>
                <Row className="mt-5 border-top py-3 py-md-4">
                  <Col>
                    {iconspaceData.length === 0 ? (
                      <label className="text-center font-weight-bold p-5 d-block">
                        No Icons Found
                      </label>
                    ) : (
                      iconData.map((item) => {
                        return (
                          <label
                            key={item.id}
                            onDoubleClick={() => handleDelete(item.id)}
                            className="py-2 px-3 border hover shadow-sm m-2 text-center rounded"
                          >
                            <UploadedIconItem iconName={item.icon} />
                          </label>
                        );
                      })
                    )}

                    {}
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SpaceIcons;
