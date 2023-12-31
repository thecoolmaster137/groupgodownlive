import React from "react";
import "./Home.css";
import AddGroup from "../AddGroup/AddGroup";

export default function Home() {
  return (
    <div className="home-main-div">
      <div className="add-btn-div">
        <button className="btn btn-success" onClick={AddGroup}>
          + Add Groups
        </button>
      </div>
      <div className="select-div">
        <div>
          <label>Any Category</label>
          <select name="Category" className="form-select">
            <option>Any Category</option>
          </select>
        </div>
        <div>
          <label>Any Country</label>
          <select name="Country" className="form-select">
            <option>Any Country</option>
          </select>
        </div>
        <div>
          <label>Any Language</label>
          <select name="Language" className="form-select">
            <option>Any Language</option>
          </select>
        </div>
        <div>
          <label>Application Type</label>
          <select name="Type" className="form-select">
            <option>Application</option>
          </select>
        </div>
        <button className="btn btn-primary">Find Group</button>
      </div>

      <div className="card">
        <div className="card-body">
          <img
            src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg"
            width={"8%"}
          />
          <div className="heading-div">
            <h5>
              <a href="#">Group Heading</a>
            </h5>
            <div>
              <a href="#">
                <i class="bi bi-list"></i> Type
              </a>
              <a href="#">
                <i class="bi bi-globe"></i> Location
              </a>
              <a href="#">
                <i class="bi bi-translate"></i> Language
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">
            <a href="#"> Group Description</a>
          </p>
          <hr />
        </div>
        <div className="ps-4 pe-4 d-flex justify-content-between">
          <a href="#">Join Group </a>
          <p className="social-icons-p">
            Share on :{" "}
            <div className="social-icons-div">
              <a href="#">
                <i class="bi bi-whatsapp"></i>
              </a>
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i class="bi bi-telegram"></i>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
