import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/Dashboard";
import UserProfileLite from "./views/UserProfileLite";
import UserProfile from "./views/UserProfile";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import UserManagement from "./views/UserManagement";
import UserFeedback from "./views/UserFeedbacks";
import NotificationManagement from "./views/NotificationManagement";
import SpaceIcons from "./views/SpaceIcons";
import LanguageManagement from "./views/LanguageManagement";
import LocationManagement from "./views/LocationManagement";
import SubscriptionPlan from "./views/SubscriptionPlan";
import ManageThemeColors from "./views/ManageColors";
import SettingManagement from "./views/Setting";
import CalendarManagement from "./views/CalendarManagement";
import EventManagement from "./views/EventManagement";
import UploadCsv from "./views/UploadCsv";
import PendingUsers from "./views/pendingUsers"
import Login from "./views/Login"
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout ,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-management",
    layout: DefaultLayout,
    component: UserManagement
  },
  {
    path: "/pending-users",
    layout: DefaultLayout,
    component: PendingUsers
  },
  {
    path: "/user-feedbacks",
    layout: DefaultLayout,
    component: UserFeedback
  },
  {
    path: "/notification-management",
    layout: DefaultLayout,
    component: NotificationManagement
  },
  {
    path: "/calendar-management",
    layout: DefaultLayout,
    component: CalendarManagement
  },
  {
    path: "/local-event-management",
    layout: DefaultLayout,
    component: EventManagement
  },
  {
    path: "/space-icons",
    layout: DefaultLayout,
    component: SpaceIcons
  },
  {
    path: "/language-management",
    layout: DefaultLayout,
    component: LanguageManagement
  },
  {
    path: "/location-management",
    layout: DefaultLayout,
    component: LocationManagement
  },
  {
    path: "/subscription-plan",
    layout: DefaultLayout,
    component: SubscriptionPlan
  },
  {
    path: "/manage-color",
    layout: DefaultLayout,
    component: ManageThemeColors
  },
  {
    path: "/settings",
    layout: DefaultLayout,
    component: SettingManagement
  },
  {
    path: "/upload-csv",
    layout: DefaultLayout,
    component: UploadCsv
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
