import React, { useState, useEffect } from "react";
import "../css/Job.css";
import { Link } from "react-router-dom";
import { MdLocationPin,MdSearch,MdChevronRight } from "react-icons/md";

export default function Job() {
  const [job, setJob] = useState([]);
  const [department, setDepartment] = useState([]);
  const [location, setLocation] = useState([]);
  const [functions, setFunction] = useState([]);
  const [search, setSearch] = useState([]);

  const populate = () => {
    fetch("https://demo.jobsoid.com/api/v1/jobs")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJob(res);
      });
  };

  useEffect(() => {
    populate();
  }, []);

  const Department = () => {
    fetch("https://demo.jobsoid.com/api/v1/departments")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDepartment(res);
      });
  };

  useEffect(() => {
    Department();
  }, []);

  const Location = () => {
    fetch("https://demo.jobsoid.com/api/v1/locations")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLocation(res);
      });
  };

  useEffect(() => {
    Location();
  }, []);

  const Function = () => {
    fetch("https://demo.jobsoid.com/api/v1/functions")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setFunction(res);
      });
  };

  useEffect(() => {
    Function();
  }, []);

  const [selected, setSelected] = useState("1");

  const handleChange = (event) => {
    console.log("Label", event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  const [selected2, setSelected2] = useState("1");
  const handleChange2 = (event) => {
    setSelected2(event.target.value);
  };

  const [selected3, setSelected3] = useState("1");
  const handleChange3 = (event) => {
    setSelected3(event.target.value);
  };

  return (
    <div className="NewContainerJob">
    <div className="NewContainer2Job">
      <div className="MainDiv">
    <div>
    <input
          type="search"
          name="email"
          placeholder="Search for Job"
          className="SearchBar"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <MdSearch className="SearchIcon" />
    </div>
        <div className="DropDownMainDiv">
          <div className="DropDownInnerDiv">
            <select
              className="Dropdown"
              value={selected}
              onChange={handleChange}
            >
              <option value="1" className="OptionTag" disabled>
                Department
              </option>
              {department.map((option) => (
                <option
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.title}
                </option>
              ))}
            </select>
            <MdChevronRight className="ArrowIcon" />
          </div>

          <div className="DropDownInnerDiv">
            <select
              className="Dropdown"
              value={selected2}
              onChange={handleChange2}
            >
              <option value="1" className="OptionTag" disabled>
                Location
              </option>
              {location.map((option) => (
                <option
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.city}
                </option>
              ))}
            </select>
               <MdChevronRight className="ArrowIcon" />
          </div>

          <div className="DropDownInnerDiv">
            <select
              className="Dropdown3"
              value={selected3}
              onChange={handleChange3}
            >
              <option value="1" className="OptionTag" disabled>
                Function
              </option>
              {functions.map((option) => (
                <option
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.title}
                </option>
              ))}
            </select>
            <MdChevronRight className="ArrowIcon" />
          </div>
        </div>
      </div>


      {job
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
          else if (val.location.city.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((job, k) => {
          return (
            <div className="JobDetailsDiv">
              <div>
                <h4 className="JobTitlePage1">
                  {job.title}
                  {/* Quality Assurance */}
                </h4>
                <div className="line"></div>
              </div>

              <div className="JobSubTitleDiv">
                <p className="JobSubTitle">
                  {/* {job.department.title} */}
                  {/* Quality Assurance Analyst */}
                  {job.slug}
                </p>
                <div>
                  <div className="Location-FullTime-Div">
                    <p className="JobDescPara">
                      <i class="far fa-building left-icons"></i>
                      {/* Quality Assurance */}
                      {job.slug}
                      {/* {job.function.map((e) => {
                        return(
                          <p>{e.title}</p>
                        )
                        })} */}
                      
                    </p>
                    <p className="NewPTagPage1">
                      <MdLocationPin className="LocationIcon" />
                      <i class="far fa-location-dot "></i> {job.location.city},{" "}
                      {job.location.state}
                      {/* Verna, Goa */}
                    </p>
                    <div className="FullTimeDiv">
                      <p className="FullTimePage1">FULL TIME</p>
                    </div>
                    <div className="ApplyViewDiv">
                      <p
                        className="Apply"
                        onClick={() => window.open(job.applyUrl)}
                      >
                        Apply{" "}
                      </p>
                      <p className="View">
                        <Link class="link" to={"/JobDetails/" + job.id}>
                          View
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </div>
  );
}
