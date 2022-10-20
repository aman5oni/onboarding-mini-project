// Main Files
import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../redux/slice/dataSlice";
// Main Files

//Icons
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";
//Icons

// Styles
import "./style.css";
// Styles

const Pagination = ({ activePage, totalData, perPage }) => {
  // Hooks
  const dispatch = useDispatch();

  // Main Container
  return (
    <div className="pagination-container">
      {/* Pagination Left Arrow Button */}
      <img
        onClick={() => {
          dispatch(changePage(activePage - 1));
        }}
        src={ArrowLeft}
        className="pagination-side-buttons"
        alt=""
      />
      {/* Pagination Left Arrow Button */}

      {/* Pagination Main buttons */}
      <div
        onClick={() => {
          dispatch(changePage(activePage - 1));
        }}
        className={`pagination-button ${activePage - 1 === 0 ? "" : "cursor"}`}
      >
        {activePage - 1 === 0 ? "" : activePage - 1}
      </div>
      <div className={`pagination-button active`}>
        {activePage}
      </div>
      <div
        onClick={() => {
          if (totalData - perPage * activePage > 0) {
            dispatch(changePage(activePage + 1));
          }
        }}
        className={`pagination-button ${totalData - perPage * activePage > 0
          ? "cursor"
          : ""}`}
      >
        {totalData - perPage * activePage > 0 ? activePage + 1 : ""}
      </div>
      {/* Pagination Main buttons */}

      {/* Pagination Right Arrow Button*/}
      <img
        onClick={() => {
          if (totalData - perPage * activePage > 0) {
            dispatch(changePage(activePage + 1));
          }
        }}
        src={ArrowRight}
        className="pagination-side-buttons"
        alt=""
      />
      {/* Pagination Right Arrow Button*/}
    </div>
  );
};

export default Pagination;
