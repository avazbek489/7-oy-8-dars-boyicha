import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Pleylist from "./pages/Pleylist";
function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="pleylist/:id"
          element={
            <MainLayout>
              <Pleylist />
            </MainLayout>
          }
        />
        <Route
          path="/likes"
          element={
            <MainLayout>
              <Likes />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
