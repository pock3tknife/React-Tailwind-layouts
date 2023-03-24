import { Home, Profile, SignIn, SignUp, Cards, SplitScreen } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  Squares2X2Icon,
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
  {
    icon: DocumentTextIcon,
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
