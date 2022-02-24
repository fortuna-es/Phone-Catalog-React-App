import React, { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../redux/actions/phonesActions";
import PhoneComponent from "./PhoneComponent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const PhoneListContainer = () => {
  const phones = useSelector((state) => state);
  const [ph, setPh] = useState(null);

  const dispatch = useDispatch();

  const fetchPhones = async () => {
    const url = process.env.REACT_APP_API_URL || "http://localhost:9000/phones";

    const response = await axios.get(url).catch((err) => {
      console.log("Err", err);
    });
    setPh(response);
    dispatch(setPhones(response.data));
  };

  useEffect(() => {
    fetchPhones();
  }, []);
  //   console.log("phones: ", phones);

  return (
    <div>
      {ph ? (
        <div className="ui grid stackable container">
          <PhoneComponent />
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default PhoneListContainer;
