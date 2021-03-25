import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
export default function () {

const pathname = window.location.pathname
console.log(`***`, pathname)
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: "",
    },
    {
      title: "User Management",
      to: "/user-management",
      htmlBefore: '<i class="material-icons">people_alt</i>',
      htmlAfter: "",
    },
    {
      title: "Pending Users",
      to: "/pending-users",
      htmlBefore: '<i class="material-icons">people_alt</i>',
      htmlAfter: "",
    },
    {
      title: "User Feedbacks",
      to: "/user-feedbacks",
      htmlBefore: '<i class="material-icons">feedback</i>',
      htmlAfter: "",
    },
    {
      title: "Notification Management",
      to: "/notification-management",
      htmlBefore: '<i class="material-icons">notifications</i>',
      htmlAfter: "",
    },
    {
      title: "Calendar Management",
      to: "/calendar-management",
      htmlBefore: '<i class="material-icons">event</i>',
      htmlAfter: "",
    },
    {
      title: "Local Calendar Management",
      to: "/local-event-management",
      htmlBefore: '<i class="material-icons">event</i>',
      htmlAfter: "",
    },
    {
      title: "Config Center",
      to:  '/space-icons',
      htmlBefore: '<i class="material-icons">smart_toy</i>',
      htmlAfter: "",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: "Space Icons",
          to: "/space-icons",
          htmlBefore: '<i class="material-icons"> settings </i>',
          cName: "sub-nav",
        },
        {
          title: "Language Management",
          to: "/language-management",
          htmlBefore: '<i class="material-icons">translate</i>',
          htmlAfter: "",
        },
        {
          title: "Location Management",
          to: "/location-management",
          htmlBefore: '<i class="material-icons">share_location</i>',
          htmlAfter: "",
        },
        {
          title: "Manage Colors",
          to: "/manage-color",
          htmlBefore: '<i class="material-icons">style</i>',
          htmlAfter: "",
        },
      ],
    },

    {
      title: "Subscription Plan",
      to: "/subscription-plan",
      htmlBefore: '<i class="material-icons">view_carousel</i>',
      htmlAfter: "",
    },

    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile"
    // },
    {
      title: "Settings",
      to: "/settings",
      htmlBefore: '<i class="material-icons">settings</i>',
      htmlAfter: "",
    },
  ];
}
