import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  getDocs,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import Grid from "@mui/material/Grid";
import _ from "lodash";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const [userCollection, setUserCollection] = useState(null);
  const [isEditItem, setIsEditItem] = useState();
  const [Button, setButton] = useState(false);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const querySnapshot = await getDocs(collection(db, "userList"));
      const array = [];
      querySnapshot.docs.map((doc) => {
        array.push({
          id: doc.id,
          details: doc.data(),
        });
      });
      setUserCollection(array);
    }
    fetchMyAPI();
  }, [loader]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    await addDoc(collection(db, "userList"), {
      name: name,
      email: email,
      phone: phone,
      address: address,
    })
      .then(() => {
        setLoader(false);
        // alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  //edit Items
  const handleEdit = async (id) => {
    await setDoc(doc(db, "userList", id), {
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
  };

  //delete Items
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "userList", id));
  };

  return (
    <>
      {console.log(userCollection)}
      <form className="form" onSubmit={handleSubmit}>
        <h1>User Table </h1>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              ``
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Full Name"
            name="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              className="form-control"
              placeholder="Mobile"
              name="mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <Button
            type="submit"
            className="rounded-pill my-3"
            color="secondary-blue"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderColor: "blue",
              marginLeft: "37%",
            }}
          >
            Save
          </Button>
        </div>

        <div className=" ">
          {/*jumbotron jumbotron-fluid */}

          <h1 style={{ textAlign: "center", marginTop: "20px" }}>User Table</h1>
        </div>
      </form>
      <Grid item xs={6}>
        <Grid xs={6}>
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {userCollection?.map((id) => {
                return (
                  <tr>
                    <td>{id.details.name}</td>
                    <td>{id.details.phone}</td>
                    <td>{id.details.email}</td>
                    <div style={{ marginLeft: "15%", marginTop: "5%" }}>
                      <i
                        className="far fa-edit add-btn"
                        onClick={() => handleEdit(id.id)}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        style={{ marginLeft: "25%" }}
                        onClick={() => handleDelete(id.id)}
                      ></i>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Grid>
      </Grid>

      <Grid xs={6}></Grid>
    </>
  );
};

export default Contacts;
