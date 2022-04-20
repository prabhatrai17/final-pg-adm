// import { Search } from '@mui/icons-material';
// import { Button, CardActions, CardContent,CardHeader, CardMedia, Typography } from '@mui/material';
import "./Card.css";

import { useState, React, useEffect } from "react";
import { Button } from "@mui/material";
import { Delete, Edit, Reviews, Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

function Card(props) {
  const [data, setData] = useState([]);
  const [currentid, setCurrentid] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getInstitute();
  }, []);

  function getInstitute() {
    fetch("http://localhost:8080/admin/viewInstitutes")
      .then((response) => response.json())
      .then((p) => setData(p));
  }

  // function deleteInstitute(instituteId)
  // {
  //   // alert(id)
  //   fetch(`http://localhost:8080/admin/deleteInstitute/${instituteId}`,{
  //     method:'DELETE'
  //   }).then((response)=>{
  //     response.json().then((resp)=>{
  //       console.warn()
  //       getInstitute();
  //     })

  //   })
  // }

  function deleteInstitute(instituteId) {
    // alert(id)
    fetch(`http://localhost:8080/admin/deleteInstitute/${instituteId}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((resp) => {
        console.warn();

        getInstitute();
      });
    });
  }
  //id passed to edit academy compenent
  function addid(ins_id) {
    const toEditAcademy = () => {
      navigate("/admin/Edit", {
        state: { id: 1, name: "sabaoon", currentid: { ins_id } },
      });
    };
    toEditAcademy();
  }

  return (
    <div>
      {data.map((datas) => (
        <Grid
          container
          columnSpacing="4"
          item
          xs={12}
          sm={3}
          md={12}
          id={datas.instituteId}
          key={datas.instituteId}
          className="card"
          style={{ marginTop: "10px" }}
        >
          <Grid style={{ marginLeft: "20px" }}>
            <img
              src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              style={{ width: "100%", height: "175px" }}
            />
          </Grid>
          <Grid className="container column">
            <h3>
              <b>
                {datas.instituteName}(id:{datas.instituteId})
              </b>
            </h3>
            <p>Address : {datas.instituteCity}</p>

            {/* <p className="info">{datas.instituteState}</p>    url commented */}
            <p className="info">MOBILE NO : {datas.instituteMobile}</p>
            <p className="info">EMAIL : {datas.instituteEmail}</p>
            <p className="info">NIRF Rank : {datas.nirfRank}</p>
          </Grid>
          <Grid className="column container desc">
            <h3
              style={{ fontSize: "15px", marginTop: "16px", width: "20%" }}
              className="info"
            >
              Description
            </h3>
            <p style={{ fontSize: "13px" }} className="info">
              {datas.instituteDescription}
            </p>
          </Grid>

          <Grid style={{ marginLeft: "15%" }}>
            {/* <div> */}
            {/* <Link
                to="/admin/Reviews"
                style={{ color: "white", textDecoration: "none" }}
                underline="none"
              > */}
            {/* <Button
                  style={{
                    marginLeft: "60px",
                    marginBottom: "10px",
                    zIndex: -1,
                  }}
                  startIcon={<Reviews />}
                >
                  Reviews
                </Button> */}
            {/* </Link> */}
            {/* </div> */}

            <div>
              {/* <Link
                to={{
                  pathname: "/admin/Edit",
                }}
                style={{
                  marginLeft: "60px",
                  marginBottom: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
                underline="none"
              > */}
              <a
                onClick={() => {
                  addid(datas.instituteId);
                }}
              >
                <Button
                  id={datas.instituteId}
                  style={{ zIndex: -1 }}
                  startIcon={<Edit />}
                  variant="contained"
                  color="primary"

                  // onClick={(e) => {
                  //   console.log(e.target.id);
                  //   setCurrentid(e.target.id);
                  // }}
                >
                  Edit
                </Button>
              </a>
              {/* </Link> */}

              <Button
                startIcon={<Delete />}
                onClick={() => deleteInstitute(datas.instituteId)}
                style={{ marginLeft: "30px", zIndex: -1 }}
                variant="outlined"
                color="secondary"
              >
                Delete
              </Button>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default Card;
