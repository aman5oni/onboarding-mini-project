import React, { useEffect } from "react";
import "./style.css";
import { getData } from "../../redux/slice/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../pagination";

const OnBoarding = () => {
  // Hooks

  const dispatch = useDispatch();
  const { activePage, totalData, perPage } = useSelector(
    state => state.pagination
  );

  const { storeData, status } = useSelector(state => state.api);

  useEffect(
    () => {
      dispatch(getData());
    },
    [dispatch]
  );

  // Hooks

  console.log(activePage, "activePage");
  console.log(status, "status");
  console.log(storeData, "data");

  // Users Component
  const Users = () => {
    if (status === "idle" && status === "loading") {
      return (
        <div className="loading-container">
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
        </div>
      );
    }
    if (status === "complete") {
      return (
        <div>
          <div className="users-container">
            {storeData.data.map((data, index) => {
              return (
                <div key={index} className="users-cards">
                  <img
                    src={data.avatar}
                    className="users-card-image"
                    alt=""
                  />
                  <div className="users-card-header">
                    {data.first_name}
                  </div>
                  <div className="users-card-sub-header">
                    {data.last_name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  // Users Component

  // Main Container

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">ONBOARDING CARD</div>
      <Users />
      <Pagination
        activePage={activePage}
        totalData={totalData}
        perPage={perPage}
      />
    </div>
  );

  // Main Container
};

export default OnBoarding;
