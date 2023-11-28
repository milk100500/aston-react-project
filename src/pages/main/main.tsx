import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../../components/header/header";
import ErrorBoundary from "../../components/errorBoundary/errorBoundary";
import { Loader } from "../../components/loader/loader";
import { AppRoute } from "../../routing/appRouting";
import { PrivateOutlet } from "../../routing/privatePages";
import DetailAlbum from "../detailAlbum/detailAlbum";
import Search from "../search/search";
import { checkAuth } from "../../store/actions/checkAuth";
import { AppDispatch } from "../../store";

const Home = lazy(() => import("../home/home"));
const Register = lazy(() => import("../register/register"));
const Login = lazy(() => import("../login/login"));
const History = lazy(() => import("../history/history"));
const Error = lazy(() => import("../error/error"));

function Main() {

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header />
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path={AppRoute.Home} element={<Home />} />
                        <Route path={AppRoute.Register} element={<Register />} />
                        <Route path={AppRoute.Login} element={<Login />} />
                        <Route path={AppRoute.DetailAlbum} element={<DetailAlbum />} />
                        <Route path={AppRoute.Search} element={<Search />} />
                        <Route path={AppRoute.Error} element={<Error />} />

                        <Route path={AppRoute.History} element={<PrivateOutlet />}>
                            <Route index element={<History />} />
                        </Route>

                        <Route path={AppRoute.Favorites} element={<PrivateOutlet />}>
                            <Route index element={<Error />} />
                        </Route>
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}
  
export default Main;