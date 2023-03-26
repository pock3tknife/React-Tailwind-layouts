import {
  Home,
  Profile,
  SignIn,
  SignUp,
  Cards,
  SplitScreen,
  Asymmetrical,
  FixedSidebar,
} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  Squares2X2Icon,
  IdentificationIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: Squares2X2Icon,
    name: "cards",
    path: "/cards",
    element: <Cards />,
  },
  {
    icon: CodeBracketIcon,
    name: "splitscreen",
    path: "/splitscreen",
    element: <SplitScreen />,
  },
  {
    icon: IdentificationIcon,
    name: "asymmetrical",
    path: "/asymmetrical",
    element: <Asymmetrical />,
  },
  {
    icon: IdentificationIcon,
    name: "fixedsidebar",
    path: "/fixedsidebar",
    element: <FixedSidebar />,
  },
  /*{
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },*/
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
