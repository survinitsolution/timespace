import React, { useState } from "react";
import { Container, Card, Row, Col, NavLink, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import AvailableLanguage from "../components/components-overview/AvailableLanguage";
import MenuManagement from "../components/components-overview/MenuManagement";
import ManageAdmin from "../components/components-overview/ManageAdmin";
import ManageFeedbackTypes from "../components/components-overview/ManageFeedbackTypes";
import "../assets/style.css";

const SettingManagement = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const TabItem = (props) => {
    return (
      <NavLink
        className={
          toggleState === props.TabIndex
            ? "nav-item nav-link active"
            : "nav-item nav-link"
        }
        onClick={() => toggleTab(props.TabIndex)}
      >
        {props.title}
      </NavLink>
    );
  };

  const TabItemPanel = (props) => {
    return (
      <div
        className={
          toggleState === props.PanelIndex ? "tab-pane d-block" : "tab-pane "
        }
      >
        {props.children}
      </div>
    );
  };

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Settings"
          subtitle="Manage Admin"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            {/* <CardHeader className="border-bottom d-md-flex align-items-md-center justify-content-md-between">
              <h6 className="m-0">Manage Locations</h6>
            </CardHeader> */}
            <CardBody>
              <Row>
                <Col>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab">
                      {/* <TabItem TabIndex={1} title="Manage Admins" /> */}
                      <TabItem TabIndex={2} title="Available Languages" />
                      <TabItem TabIndex={3} title="Menu Management" />
                      <TabItem TabIndex={4} title="Manage Feedback Types" />
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    {/* <TabItemPanel PanelIndex={1}>
                      <ManageAdmin />
                    </TabItemPanel> */}
                    <TabItemPanel PanelIndex={2}>
                      <AvailableLanguage />
                    </TabItemPanel>
                    <TabItemPanel PanelIndex={3}>
                      <MenuManagement />
                    </TabItemPanel>
                    <TabItemPanel PanelIndex={4}>
                      <ManageFeedbackTypes />
                    </TabItemPanel>
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

export default SettingManagement;
