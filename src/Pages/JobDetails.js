import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/JobDetails.css";
import Job from "./Job";
import img1 from "../Images/fb.jpg";
import img2 from "../Images/linkedin.png";
import img3 from "../Images/twitter.png";
import { MdLocationPin } from "react-icons/md";

export default function ReactRouter(props) {
  const [JobDetails, setJobDetails] = useState("");
  const [Job, setJob] = useState([]);

  let { id } = useParams();

  const populate = async () => {
    let result = await fetch("https://demo.jobsoid.com/api/v1/jobs/" + id);
    result = await result.json();
    console.log(result);
    setJobDetails(result);
  };

  useEffect(() => {
    populate();
  }, []);

  const job = () => {
    fetch("https://demo.jobsoid.com/api/v1/jobs")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJob(res);
      });
  };

  useEffect(() => {
    job();
  }, []);

  return (
    <div className="NewContainer">
      <div className="NewContainer2">
        <div className="JobDetailsDivPage2">
          <div className="JobSubTitleDiv">
            <p className="heading">
              Development department at Technorix Systems Goa
            </p>
            <p className="JobSubTitlePage2">
              {/* Quality Assurance Analyst */}
              {JobDetails.title}
            </p>
            <div>
              <div className="Location-FullTime-Div">
                <p className="JobDescPara">
                  <i class="far fa-building new_icons_page2"></i>
                  {/* Quality Assurance */}
                  {JobDetails.title}
                </p>
                <p>
                  <MdLocationPin className="LocationIcon2 new_icons_page2" />
                  Verna, Goa
                  {/* {JobDetails.location?.map((item) => {
                    return <p> {item.city}</p>;
                  })} */}
                </p>
                <div className="FullTimeDiv">
                  <p className="FullTime">FULL TIME</p>
                </div>
              </div>
              <div className="ApplyButtonDiv">
                <button className="ApplyButton" onClick={()=> window.open(JobDetails.applyUrl)}>Apply</button>
              </div>
            </div>
          </div>
        </div>

        <div className="MainDivisionRow">
          <div className="LookinForMainDiv">
            <div className="LookingForDiv">
              <p className="LookingForP1">
                Looking for {JobDetails.title}
                {/* React/ Angular Experts. */}

              </p>
              <p className="LookingForP2">
                We believe in perfect work-life balance. We want everyone to be
                successful, healthy and secure. Here is a glimpse at what we
                offer. We believe in perfect work-life balance. We want everyone
                to be successful, healthy and secure. Here is a glimpse at what
                we offer.
                {/* {JobDetails.description} */}
              </p>
            </div>

            <div className="RequirementDiv">
              <p className="Requirement1">Requirements:</p>
              <ul>
              <li>
                We believe in perfect work-life balance. We want everyone to be
                successful, healthy and secure. Here is a glimpse at what we
                offer. We believe in perfect work-life balance. We want everyone
                to be successful, healthy and secure. Here is a glimpse at what
                we offer.
              </li>
                <li> We believe in perfect work-life balance. We want everyone to be
                successful, healthy and secure.</li>
                <li>We want everyone
                to be successful, healthy and secure. Here is a glimpse at what
                we offer.</li>
              </ul>
            </div>

            <div>
              <p className="Bonus1">Bonus Points if:</p>
              <p >
                <ul>
                  <li>We believe in perfect work-life balance. We want everyone to be
                successful, healthy and secure. Here is a glimpse at what we
                offer.</li>
                <li> We want everyone
                to be successful, healthy and secure. Here is a glimpse at what
                we offer.</li>
                <li>We believe in perfect work-life balance. We want everyone to be
                successful, healthy and secure. Here is a glimpse at what we
                offer.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="OtherJobMainDiv_ShareJob">
            <div className="OtherJobMainDiv">
              <p className="OtherJob">OTHER JOB OPENINGS</p>
              <div className="linePage2"></div>

              {Job.slice(0,4).map((job) => {
                return (
                  <div className="JobSubTitleDiv">
                    <p className="OtherJobSubPage2">
                      {/* Quality Assurance Analyst */}
                      {job.title}
                    </p>
                    <div>
                      <div className="Location-FullTime-Div">
                        <p className="JobDescPara2">
                          <i class="far fa-building new_icons_page2"></i>
                          {/* Quality Assurance */}
                          {job.title}
                        </p>
                        <p className="JobDescParaLocation2">
                          <MdLocationPin className="LocationIcon3 new_icons_page2" />
                          {/* Verna, Goa */}
                          {job.location.city}, {job.location.state}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="ShareJobDiv">
              <p className="ShareJobPara">SHARE JOB OPENINGS</p>
              <div className="linePage2"></div>

              <div className="ImageDiv">
                <div className="ImageSubDiv"  onClick={()=> window.open("https://www.facebook.com/")}>
                <img src={img1} />
                </div>
                <div className="ImageSubDiv" onClick={()=> window.open("https://www.linkedin.com/")}>
                  <img src={img2} />
                </div>
                <div className="ImageSubDiv" onClick={()=> window.open("https://www.twitter.com/")}>
                  <img src={img3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
