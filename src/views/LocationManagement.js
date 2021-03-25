import React, { useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  Row,
  Col,
  NavLink,
  CardBody
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import AddStatePanel from "../components/components-overview/AddStatePanel";
import AddDistrictPanel from "../components/components-overview/AddDistrictPanel";
import AddTownPanel from "../components/components-overview/AddTownPanel";
import "../assets/style.css";

const LocationManagement = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = index => {
    setToggleState(index);
  };
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Location Management"
          subtitle="Location"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Manage Locations</h6>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab">
                      <NavLink
                        className={
                          toggleState === 1
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        onClick={() => toggleTab(1)}
                      >
                        Add State
                      </NavLink>
                      <NavLink
                        className={
                          toggleState === 2
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        onClick={() => toggleTab(2)}
                      >
                        Add District
                      </NavLink>
                      <NavLink
                        className={
                          toggleState === 3
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        onClick={() => toggleTab(3)}
                      >
                        Add Town
                      </NavLink>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className={
                        toggleState === 1 ? "tab-pane d-block" : "tab-pane "
                      }
                    >
                      <AddStatePanel />
                    </div>
                    <div
                      className={
                        toggleState === 2 ? "tab-pane d-block" : "tab-pane "
                      }
                    >
                      <AddDistrictPanel />
                    </div>
                    <div
                      className={
                        toggleState === 3 ? "tab-pane d-block" : "tab-pane "
                      }
                    >
                      <AddTownPanel />
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LocationManagement;
