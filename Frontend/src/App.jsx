import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/authProvider";
import { CheckCircle, LoaderCircle, XCircle } from "lucide-react";
import Layout from "./components/Layout/Layout";

const App = () => {
  const { authUser, loading } = useAuth();
  console.log(authUser);

  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                {loading ? (
                  <div className="pt-32 text-center">
                    Loading...
                    <LoaderCircle />
                  </div>
                ) : authUser ? (
                  <Course />
                ) : (
                  <Navigate to="/?authRequired=true&redirect=/courses" />
                )}
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contactus"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "max-w-xs md:max-w-sm text-sm",
            success: {
              style: { background: "white", color: "black" }, 
            },
            error: {
              style: { background: "white", color: "black" }, 
            },
          }}
        >
          {(t) => (
            <div
              className={`shadow-lg mt-12 p-4 rounded-md flex items-start gap-3 ${
                t.type === "success" ? "border-green-500" : "border-red-500"
              } bg-white text-black `}
            >
              {/* Lucide Icon */}
              <div className="">
                {t.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </div>

              {/* Message + Progress */}
              <div className=" flex-1">
                <div>{t.message}</div>
                <div className=" h-1 w-full  rounded overflow-hidden">
                  <div
                    className={`h-full ${
                      t.type === "success" ? "bg-green-500" : "bg-red-500"
                    } animate-toast-progress`}
                    style={{ animationDuration: `${t.duration}ms` }}
                  />
                </div>
              </div>
            </div>
          )}
        </Toaster>
      </div>
    </>
  );
};

export default App;
