import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  errorNotification,
  warningNotification,
} from "./notification/notification";
import { useDispatch } from "react-redux";
import { Card, CardTitle, CardBody } from "reactstrap";
import styles from "../styles/Drivers.module.css";

const DriverBooking = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [imgName, setimgName] = useState("");
  const [data, setData] = useState({
    Name: "",
    Email: "",
    PhoneNo: "",
    Address: "",
    CNIC: "",
    charges: "",
    FromCity: "",
    ToCity: "",
    DateIn: "",
    DateOut: "",
    DriverId: "",
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!LoggedIn) {
      errorNotification("Error", "Please Login First");
      return;
    } else {
      const payload = {
        
      };
      setLoading(true);
      dispatch(driverBookingRequest(payload, handleLoading));
    }
  };

  return (
    <Card className={`${styles.driverData} container-fluid`}>
      <CardTitle className={styles.cardTitle}>
        <div className="border-bottom mt-2 text-center">
          <h3 className="mb-2">Please Fill Booking Details </h3>
        </div>
      </CardTitle>
      <form onSubmit={(e) => handleSubmit(e)} className="row">
        <div className="col-md-6 form-group mb-3">
          <label className="label">Your Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={data.Name}
            onChange={(e) => handleData("Name", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={data.Email}
            onChange={(e) => handleData("Email", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={data.PhoneNo}
            onChange={(e) => handleData("PhoneNo", e.target.value)}
            required
          />
        </div>

        <div className="col-md-6 form-group mb-3">
          <label className="label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={data.Address}
            onChange={(e) => handleData("Address", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">CNIC Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="CNIC Number"
            value={data.CNIC}
            onChange={(e) => handleData("CNIC", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">From City</label>
          <input
            type="text"
            className="form-control"
            placeholder="From City"
            value={data.FromCity}
            onChange={(e) => handleData("FromCity", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">To City</label>
          <input
            type="text"
            className="form-control"
            placeholder="To City"
            value={data.ToCity}
            onChange={(e) => handleData("ToCity", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">Date In</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date In"
            value={data.DateIn}
            onChange={(e) => handleData("DateIn", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">Date Out</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date Out"
            value={data.DateOut}
            onChange={(e) => handleData("DateOut", e.target.value)}
            required
          />
        </div>

        <div className="col-md-6 mb-3 vehicleButton">
          <button type="submit" className="signin-btn">
            Book Now
          </button>
        </div>
      </form>
    </Card>
  );
};

export default DriverBooking;
