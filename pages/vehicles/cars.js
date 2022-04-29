import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle, CardBody } from "reactstrap";
import styles from "../../styles/Drivers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserVehicles } from "../../redux/vehicles/vehicles.actions";
const Cars = () => {
  const dispatch = useDispatch();
  const userCars = useSelector(({ vehicles }) => vehicles.vehicles);
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData]=useState([]);
  const [searchData, setSearchData]=useState({
    city:"Lahore",
    transmission:"Auto",
  })
  const handleLoading = () => {
    setLoading(false);
  };

  const handleData = (key, value) => {
    setSearchData({ ...searchData, [key]: value });
  };

  useEffect(() => {
    const payload = {
      vehicleType: "Car",
    };
    setLoading(true);
    dispatch(getUserVehicles(payload, handleLoading));

  }, [])

  useEffect(() => {
      setFilterData(userCars);
  }, [userCars])

  const filterDataFunction=()=>{
    const newData=userCars.filter((item)=>{
         const city=item.fromCity.toUpperCase();
         const transmission=item.transmission.toUpperCase();
         const matchCity=searchData.city.toUpperCase();
         const matchTransmission=searchData.transmission.toUpperCase();
         return city.includes(matchCity) && transmission.includes(matchTransmission);
    })
    setFilterData(newData);
  }

  

  return (
    <section className={styles.driversection}>
      <div className={styles.drivercontainer}>
        <CardTitle tag="h6" className="p-2 mb-5 container text-center">
          <div className="row justify-content-center">
            <div className="col-md-3 form-group mb-3">
              <label className="label text-danger mb-1">Select City</label>
              <select
                id="selectCity"
                className={`${styles.searchCard} form-control  `}
                onChange={(e) => handleData("city", e.target.value)}
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
            <div className="col-md-3 form-group mb-3">
              <label className="label text-danger mb-1">
                Select Transmission Type
              </label>
              <select
                id="transmissionType"
                className={`${styles.searchCard} form-control `}
                onChange={(e) => handleData("transmission", e.target.value)}
              >
                <option value="Auto">Auto</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div className="col-md-3 form-group searchButton">
              <button onClick={filterDataFunction} type="submit" className="signin-btn">
                Search
              </button>
            </div>
          </div>
        </CardTitle>

        <div className="row">

          {filterData !== null ? (filterData.map((car, key) =>
            <>

              <Link href={{
                pathname: "/vehicles/vehicledetails",
                query: car,
              }}
                passHref>
                <div className="col-md-6 col-lg-3">
                  <Card className="effectCard">
                    <Image
                      src={car.photoUrl}
                      alt="Car Image"
                      className={styles.driverimg}
                      width={500}
                      height={250}
                      layout="responsive"

                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <h6 className="mb-0">Vehicle Name</h6>
                        <p className="mb-0 text-muted text-capitalize">{car.name}</p>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <h6 className="mb-0">Color</h6>
                        <p className="text-muted mb-0 text-capitalize">{car.color}</p>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <h6 className="mb-0">Model Year</h6>
                        <p className="text-muted mb-0">{car.modelYear}</p>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <h6 className="mb-0">Transmission</h6>
                        <p className="text-muted mb-0">{car.transmission}</p>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <h6 className="mb-0">City</h6>
                        <p className="text-muted mb-0">{car.fromCity}</p>
                      </div>
                      <div className="topBorder mb-3"></div>
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">Per Day Charges</h6>
                        <h6 className="text-muted mb-0">PKR {car.perDayPrice}</h6>
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>

            </>


          )) : <></>}


        </div>
      </div>
    </section>
  );
};

export default Cars;
