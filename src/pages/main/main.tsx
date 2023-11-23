import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "../../components/header/header";
import ErrorBoundary from "../../components/errorBoundary/errorBoundary";
import { Loader } from "../../components/loader/loader";
import { AppRoute } from "../../routing/app-routing";

const Home = lazy(() => import("../home/home"));
const Register = lazy(() => import("../register/register"));
const Login = lazy(() => import("../login/login"));
const Error = lazy(() => import("../error/error"));

function Main() {

    return (
        <BrowserRouter>
            <Header />
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path={AppRoute.Home} element={<Home />} />
                        <Route path={AppRoute.Register} element={<Register />} />
                        <Route path={AppRoute.Login} element={<Login />} />
                        <Route path={AppRoute.Error} element={<Error />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}
  
export default Main;