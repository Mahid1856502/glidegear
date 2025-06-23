import PublicRoute from "./PublicRoute";
import PATH from "./path";
import { lazy } from "react";
import AuthRoute from "./AuthRoute";
import ECommerce from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "../pages/Settings";
import { FaGear } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import Profile from "../pages/Profile";
import { FaUser } from "react-icons/fa";
import AccountVerification from "../pages/auth/AccountVerification";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

const LandingPage = lazy(() => import("../pages/LandingPage/Index"));
const Products = lazy(() => import("../pages/Products/Index"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

const AUTH_ROUTES = [
  {
    title: "Login",
    path: PATH.LOGIN,
    component: SignIn,
    routeType: AuthRoute,
  },
  {
    title: "Signup",
    path: PATH.SIGN_UP,
    component: SignUp,
    routeType: AuthRoute,
  },
  {
    title: "Verification",
    path: PATH.VERIFY_ACCOUNT,
    component: AccountVerification,
    routeType: AuthRoute,
  },
  {
    title: "Dashboard",
    path: PATH.CALLBACK,
    component: ECommerce,
    routeType: ProtectedRoute,
  },
];
const PUBLIC_ROUTES = [
  {
    title: "Home",
    path: PATH.HOME,
    component: LandingPage,
    routeType: PublicRoute,
  },
  {
    title: "Products",
    path: PATH.PRODUCTS,
    component: Products,
    routeType: PublicRoute,
  },
];

export const PROTECTED_ROUTES = [
  {
    title: "My Account",
    path: PATH.SETTINGS,
    component: Settings,
    routeType: ProtectedRoute,
    icon: FaGear,
  },
  {
    title: "Profile",
    path: PATH.PROFILE,
    component: Profile,
    routeType: ProtectedRoute,
    icon: FaUser,
  },
  {
    title: "Dashboard",
    path: PATH.DASHBOARD,
    component: Dashboard,
    routeType: ProtectedRoute,
    icon: MdDashboard,
  },
];

const ROUTES = [...AUTH_ROUTES, ...PUBLIC_ROUTES, ...PROTECTED_ROUTES];

export default ROUTES;
