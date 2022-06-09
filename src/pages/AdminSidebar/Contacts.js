import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { Button } from "reactstrap";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { async } from "@firebase/util";
import { randomCity } from "@mui/x-data-grid-generator";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const [userCollection, setUserCollection] = useState(null);
  const [editRecord, setEditRecord] = useState(false);
  const [editId, setEditId] = useState(false);

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
  }, [loader, editRecord]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (!editRecord) {
      await addDoc(collection(db, "userList"), {
        name: name,
        email: email,
        phone: phone,
        onlineState: " ",
        role: "user",
        isVerified: false,
        about: {
          description: [
            {
              about: " ",
            },
          ],
          skill: [
            {
              programming: " ",
              web_Scripting: " ",
              database: " ",
              tools: " ",
            },
          ],
          office_Contact: [
            {
              phone_Number: " ",
              email: " ",
              skype: " ",
              linked_In: " ",
            },
          ],
          home_Contacts: [
            {
              email: " ",
              phone: " ",
            },
          ],
          // current_Address: [
          //   {
          //     house_Number: " ",
          //     village: " ",
          //     landmarks: " ",
          //     city: " ",
          //     state: " ",
          //     pinCode: " ",
          //     country: " ",
          //   }
          // ],
          // permanent_Address: [
          //   {
          //     house_Number: " ",
          //     village: " ",
          //     landmarks: " ",
          //     city: " ",
          //     state: " ",
          //     pinCode: " ",
          //     country: " ",
          //   }
          // ],
          identification_Details: [
            {
              adhaar_Card: " ",
              pan_Card: " ",
              voter_Card: " ",
              passport_Number: " ",
              driving_License: " ",
              vehicle_Regd_No: " ",
            },
          ],
          personal_Details: [
            {
              father_Name: " ",
              mother_Name: " ",
              marital_Status: " ",
              date_of_birth: " ",
              hobbies: " ",
              blood_Group: " ",
              nationality: " ",
            },
          ],
          educational_Details: [
            {
              qualification: " ",
              stream: " ",
              session: " ",
              year_of_Passing: " ",
            },
          ],
        },
        created_at: moment.now(),
      })
        .then(() => {
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
    } else {
      console.log("inside", editId);
      const docRef = doc(db, "userList", editId.id);
      console.log(docRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await setDoc(docRef, {
          name: name,
          email: email,
          phone: phone,
        }).then(() => {
          setEditRecord(false);
        });
      }
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  //Edit Items
  const handleEdit = async (id) => {
    setEditRecord(true);
    setName(id.details.name);
    setEmail(id.details.email);
    setPhone(id.details.phone);
    setEditId(id);
  };

  //Delete Items
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "userList", id));
    document.getElementById(id).remove();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>User Table </h1>
        <input type="hidden" value="" id="edit_credentials"></input>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              ``
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            id="name"
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
              type="number"
              id="phone"
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
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <Button
            type="submit"
            id="save"
            className="rounded-pill my-3"
            color="secondary-blue"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderColor: "blue",
              marginLeft: "37%",
              display: "block",
            }}
          >
            Save
          </Button>
        </div>
        <div>
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
                  <tr id={id.id}>
                    <td>{id.details.name}</td>
                    <td>{id.details.phone}</td>
                    <td>{id.details.email}</td>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i
                      className="far fa-edit add-btn"
                      style={{ marginTop: "15%" }}
                      onClick={() => {
                        handleEdit(id);
                      }}
                    ></i>
                    &nbsp;&nbsp;
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => {
                        handleDelete(id.id);
                      }}
                    ></i>
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
