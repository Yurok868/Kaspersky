import { type JSX } from "react";
import { Route, Routes } from "react-router";
import MainPage from "../../pages/MainPage/MainPage";
import ErrorDefaultPage from "../../pages/ErrorDefaultPage/ErrorDefaultPage";
import Layout from "../../shared/layout/layout/Layout";

export default function RouterProvider(): JSX.Element {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorDefaultPage />} />
      </Route>
    </Routes>
  );
}
