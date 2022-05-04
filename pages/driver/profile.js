import React from "react";
import { useState, useEffect } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import FullLayout from "../../components/DriverDashboard/components/Layout/FullLayout";
import user from "../../components/TransporterDashboard/images/users/user1.jpg";
function Profile() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const token = useSelector(({ auth }) => auth.token);
  const [data, setData] = useState({});

  useEffect(() => {
    if (user !== null) {
      setData(user);
    }
  }, [user])

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: data.name,
      email: data.email,
      phone_no: data.phone,
      age: data.age,
      perDayPrice: data.perDayPrice,
      address: data.address,
      driver_type: data.driver_type,
      license_number: data.license_number,
      drive_experience: data.drive_experience,
      expiry_date: data.expiry_date,
      city: data.city,
      password: data.password,
      photoUrl: data.photoUrl,
    };
    setLoading(true);
    dispatch(userSignUpRequest(payload, handleLoading));
  };

  return (
    <div>
      {!isLoggedIn ? <div className="ftco-section">Please Login First</div> : <FullLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <Card className="bg-white">
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                  <i className="bi bi-person me-2" />
                  Edit Profile
                </CardTitle>
                <CardBody>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="signin-form row"
                  >
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => handleData("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => handleData("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        value={data.phone_no}
                        onChange={(e) => handleData("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        value={data.address}
                        onChange={(e) => handleData("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">City</label>
                      <select
                        id="selectCity"
                        className="form-control"
                        value={data.city}
                        onChange={(e) =>
                          handleData("city", e.target.value)
                        }
                      >
                       
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Multan">Multan</option>
                        <option value="Gujranwala">Gujranwala</option>
                        <option value="Quetta">Quetta</option>
                        <option value="Sarghoda">Sarghoda</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">CNIC Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CNIC"
                        value={data.cnic}
                        onChange={(e) => handleData("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Age</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Age"
                        value={data.age}
                        onChange={(e) => handleData("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Driving License Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Driving License "
                        value={data.license_number}
                        onChange={(e) => handleData("drivingLicense", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">License Expiry Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="dd-mm-yyyy"
                        value={data.expiry_date?.split("T")[0]}
                        onChange={(e) =>
                          handleData("expiry_date", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Per Day Charges</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Per Day Charges "
                        value={data.perDayPrice}
                        onChange={(e) => handleData("perDayCharges", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Driving Experience</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Driving Experience Years"
                        value={data.drive_experience}
                        onChange={(e) => handleData("drivingExperience", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Select Driver Type</label>
                      <select
                        id="driverType"
                        className="form-control"
                        value={data.driver_type}
                        onChange={(e) =>
                          handleData("driverType", e.target.value)
                        }
                      >
                        <option value="Car">Car</option>
                        <option value="Bus">Bus</option>
                        <option value="Van">Van</option>
                        <option value="Small Truck">Small Truck</option>
                        <option value="Heavy Truck">Heavy Truck</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => handleData("password", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label className="label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={data.confirmpassword}
                        onChange={(e) =>
                          handleData("confirmpassword", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3 form-group vehicleButton">
                      <button type="submit" className="signin-btn">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-4">
              <Card className="bg-white">
                <CardTitle
                  tag="h6"
                  className="border-bottom text-center p-3 mb-0 "
                >
                  <i className="bi bi-person me-2" />
                  Your Profile
                </CardTitle>
                <CardBody>
                  <div className="justify-content-center row">
                    <div className="transporterImg">
                      <Image
                        src={user.photoUrl}
                        alt="hero banner"
                        height={300}
                        width={300}
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-danger">{user.name}</h3>
                    <div className="d-flex row">
                      <h5 className="text-muted">{user.email}</h5>
                    </div>
                    <div>
                      <h6 className="text-muted"> {user.phone_no}</h6>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </FullLayout>}
    </div>

  );
}

export default Profile;