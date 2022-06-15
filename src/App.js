import "./styles.scss";
import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import UsersList from "./components/UsersList/UsersList";

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}
