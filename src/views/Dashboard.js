import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col , Card, CardBody} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SmallStats from "../components/common/SmallStats";
// import UsersOverview from "./../components/blog/UsersOverview";
// import UsersByDevice from "./../components/blog/UsersByDevice";
// import NewDraft from "./../components/blog/NewDraft";
// import Discussions from "./../components/blog/Discussions";
// import TopReferrals from "./../components/common/TopReferrals";

const activeUser = [
  {
    type: "Normal",
    userNumber: 255
  },
  {
    type: "Tester",
    userNumber: 400
  },
  {
    type: "Admin",
    userNumber: 25
  }
];

const deletedUser = [
  {
    type: "Normal",
    userNumber: 300
  },
  {
    type: "Tester",
    userNumber: 180
  },
  {
    type: "Admin",
    userNumber: 15
  }
];

const activeCalendar = [
  {
    type: "Total Active Calendar",
    activeNumber: 300
  }
];

const Dashboard = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="Dashboard"
        subtitle="Dashboard"
        className="text-sm-left mb-3"
      />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg-4 mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>
    <Row>
      <Col md="6">
        <Row className="mt-4">
          <Col>
            <h3 className="font-weight-bold border-bottom pb-3 h5">
              Active Users
            </h3>
          </Col>
        </Row>
        <Row>
          {activeUser.map((item, i) => {
            return (
              <Col key={i} sm="4" className="mb-4">
                <Card small className="card-post card-post--1">
                  <CardBody className="text-center">
                    <h5 className="card-title font-weight-bold">{item.type}</h5>
                    <h3 className="card-text d-inline-block mb-3">
                      {item.userNumber}
                    </h3>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col md="6">
        <Row className="mt-4">
          <Col>
            <h3 className="border-bottom pb-3 font-weight-bold h5">
              Deleted User{" "}
            </h3>
          </Col>
        </Row>
        <Row>
          {deletedUser.map((item, i) => {
            return (
              <Col key={i} sm="4" className="mb-4">
                <Card small className="card-post card-post--1">
                  <CardBody className="text-center">
                    <h5 className="card-title font-weight-bold text-fiord-blue">
                      {item.type}
                    </h5>
                    <h3 className="card-text d-inline-block mb-3">
                      {item.userNumber}
                    </h3>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
    <Row>
      {activeCalendar.map((item, i) => {
        return (
          <Col key={i} sm="4" className="mb-4">
            <Card small className="card-post card-post--1">
              <CardBody className="text-center">
                <h5 className="card-title font-weight-bold text-fiord-blue">
                  {item.type}
                </h5>
                <h3 className="card-text d-inline-block mb-3">
                  {item.activeNumber}
                </h3>
              </CardBody>
            </Card>
          </Col>
        );
      })}
      <Col sm="4" className="mb-4">
        <Card small className="card-post card-post--1">
          <CardBody className="text-center">
            <h5 className="card-title font-weight-bold text-fiord-blue">
              Total Active Location
            </h5>
            <h3 className="card-text d-inline-block mb-3">15</h3>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4" className="mb-4">
        <Card small className="card-post card-post--1">
          <CardBody className="text-center">
            <h5 className="card-title font-weight-bold text-fiord-blue">
              Total Active Langauge
            </h5>
            <h3 className="card-text d-inline-block mb-3">2</h3>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

Dashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

Dashboard.defaultProps = {
  smallStats: [
    {
      label: "Total Pending Approval",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Number of Users",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Total Revenue",
      value: "8,147",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "Total Free Registerations",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Total Paid Registration",
      value: "17,281",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    },
    {
      label: "Non Renewal Users",
      value: "17,281",
      percentage: "8.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(255,255,0,0.1)",
          borderColor: "rgb(50,180,200)",
          data: [3, 2, 3, 2, 4, 5, 8]
        }
      ]
    }
  ]
};

export default Dashboard;
