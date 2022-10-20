import React from "react";
import PaginationPage from "./pages/paginationPage";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <PaginationPage />
    </Provider>
  );
};

export default App;
