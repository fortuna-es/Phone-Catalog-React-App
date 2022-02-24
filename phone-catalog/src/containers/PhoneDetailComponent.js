import React, { useEffect } from "react";
import "../style.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedPhone,
  removeSelectedPhone,
} from "../redux/actions/phonesActions";

const PhoneDetailComponent = () => {
  const phone = useSelector((state) => state.phone);
  const { image, title, price, category, description, ram, color } = phone;
  const { phoneId } = useParams();
  const dispatch = useDispatch();
//   console.log(phone);
//   console.log(phoneId);

  const fetchPhoneDetail = async () => {
    var url2 =
      process.env.REACT_APP_API_URL ||
      `http://localhost:9000/phones/${phoneId}`;

    const response = await axios.get(url2).catch((err) => {
      console.log("Err", err);
    });
    console.log(response.data);

    dispatch(selectedPhone(response.data));
  };

  useEffect(() => {
    if (phoneId && phoneId !== "") fetchPhoneDetail(phoneId);
    return () => {
      dispatch(removeSelectedPhone());
    };
  }, [phoneId]);

  return (
    <div className="ui top-100 grid container">
      {Object.keys(phone).length === 0 ? (
        <div className="top-50">...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">=</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label"> $ {price}</a>
                </h2>
                <h3 className="ui brown block header">{category} </h3>
                <h4 className="ui brown block header">Color: {color}</h4>
                <h4 className="ui brown block header">RAM: {ram} GB</h4>
                <p className="ui brown block header">{description}</p>
                <Link to="/">
                  <button className="visible content button">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneDetailComponent;
