import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const Login = lazy(() => import("../login/login"));
const Error = lazy(() => import("../errorpage/errorpage"));
const Mycharacters = lazy(() => import("../mycharacters/mycharacters"));
const CharacterDetails = lazy(
  () => import("../characterdetails/characterdetails")
);
const AddForm = lazy(() => import("../addform/addform"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route
          path={"/MyCharacters"}
          element={<Mycharacters></Mycharacters>}
        ></Route>
        <Route
          path={"/CharacterDetails/:id"}
          element={<CharacterDetails></CharacterDetails>}
        ></Route>
        <Route path={"/AddForm"} element={<AddForm></AddForm>}></Route>

        <Route path={"*"} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
}
