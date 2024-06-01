// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './container/HomePage/Homepage';
import CustomerNamePage from './container/CustomerNamePage/CustomerNamePage';
import CustomerNameChangeLogPage from './container/CustomerNameChangeLogPage/CustomerNameChangeLogPage';
import PrivateRoute from './component/PrivateRoute';
import LoginPage from './container/LoginPage/LoginPage';
import RegisterPage from './container/RegisterPage/RegisterPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="mt-[5rem]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<PrivateRoute />}>
                <Route path="/customer-name" element={<CustomerNamePage />} />
                <Route
                  path="/customer-name-change-log/:customerNameId"
                  element={<CustomerNameChangeLogPage />}
                />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
