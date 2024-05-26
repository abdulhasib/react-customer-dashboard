// main.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

(() => {
  const root = createRoot(rootElement);
  root.render(
    // <StrictMode>
    <App />
    // </StrictMode>
  );
})();

// const renderApp = () => {
//   const root = createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// };

// renderApp();

// const renderAppFallback = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     rootElement
//   );
// };

// // Check if the browser supports React 18 createRoot API
// if (createRoot && typeof createRoot === "function") renderApp();
// else renderAppFallback(); // fallback

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// import { Outlet } from "react-router-dom";

// import Header from './component/Header'
// import Footer from './component/Footer'

// const Layout = () => {
//   return (
//       <>
//         <Header />
//         <Outlet />
//         <Footer />
//       </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout/>,
//     children: [
//       {
//         path: "/customer-name",
//         element: <CustomerNamePage />,
//       },
//       // {
//       //   path: "/customer-name",
//       //   element: <CustomerNameChangeLogPage />
//       // }
//     ]
//   }
// ])

// ReactDOM.render(
//   <React.StrictMode>
//    <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
