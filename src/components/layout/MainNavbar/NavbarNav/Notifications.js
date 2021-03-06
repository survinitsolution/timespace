import React, { useState } from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default () => {
  const [visible, setVisible] = useState(false);
  const [unreadNotification,setUnreadNotification] = useState([{a:"a"},{b:"b"}])
  const toggleNotifications = () => {
    setUnreadNotification([])
    setVisible((prevState) => !prevState);
  };

  return (
    <NavItem className="border-right dropdown notifications">
      <NavLink
        className="nav-link-icon text-center"
        style={{cursor: "pointer"}}
        onClick={toggleNotifications}
      >
        <div className="nav-link-icon__wrapper">
          <i className="material-icons">&#xE7F4;</i>
          <Badge pill theme="danger">
            {unreadNotification.length}
          </Badge>
        </div>
      </NavLink>
      <Collapse open={visible} className="dropdown-menu dropdown-menu-small">
        <DropdownItem>
          <div className="notification__icon-wrapper">
            <div className="notification__icon">
              <i className="material-icons">&#xE6E1;</i>
            </div>
          </div>
          <div className="notification__content">
            <span className="notification__category">Analytics</span>
            <p>
              Your website’s active users count increased by{" "}
              <span className="text-success text-semibold">28%</span> in the
              last week. Great job!
            </p>
          </div>
        </DropdownItem>
        <DropdownItem>
          <div className="notification__icon-wrapper">
            <div className="notification__icon">
              <i className="material-icons">&#xE8D1;</i>
            </div>
          </div>
          <div className="notification__content">
            <span className="notification__category">Sales</span>
            <p>
              Last week your store’s sales count decreased by{" "}
              <span className="text-danger text-semibold">5.52%</span>. It could
              have been worse!
            </p>
          </div>
        </DropdownItem>
        <DropdownItem className="notification__all text-center">
          View all Notifications
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
};
