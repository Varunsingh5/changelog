import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { addDoc, getDocs, collection, where, query } from "firebase/firestore";
import { Button, } from "reactstrap";
import Grid from '@mui/material/Grid';
import moment from "moment";
// import { doc, updateDoc, deleteField } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";


const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const [userCollection, setUserCollection] = useState(null);


  useEffect(() => {
    async function fetchMyAPI() {
      const q = query(collection(db, "userList"), where("role", "==", "user"))
      const querySnapshot = await getDocs(q);
      const array = [];
      querySnapshot.docs.map((doc) => {
        array.push({
          'id': doc.id,
          'details': doc.data()
        });
      });
      setUserCollection(array)
    }
    fetchMyAPI();
  }, [loader]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    // const Ref = collection(db, "userList");
    // const q = query(Ref, where("phone", "==", phone));
    // const querySnapshot = await getDocs(q);
    
    // const docRef = doc(db, "userList");
    // const docSnap = await getDocs(query(docRef, where("phone", "==", phone)));
    // console.log("doc====>>",phone,docSnap);



    const q = query(collection(db, "userList"), where("phone", "==", phone));

    const querySnapshot = await getDocs(q);
    const dd = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      dd.push(doc.data());
    });
   console.log("gkjhkjhjkh",querySnapshot);
    if(dd.length>0){
      alert("number exists")
    }
    else{

         await addDoc(collection(db, "userList"), {
        name: name,
        email: email,
        phone: phone,
        address: address,
        onlineState: " ",
        role: "user",
        isVerified: false,
        created_at: moment.now(),
        about: {
          description: [
            {
              about: " ",
            }
          ],
          skill: [
            {
              programming: " ",
              web_Scripting: " ",
              database: " ",
              tools: " ",
            }
          ],
          office_Contact: [
            {
              phone_Number: " ",
              email: " ",
              skype: " ",
              linked_In: " ",
            }
          ],
          home_Contacts: [
            {
              email: " ",
              phone: " ",
            }
          ],
          current_Address: [
            {
              house_Number: " ",
              village: " ",
              landmarks: " ",
              city: " ",
              state: " ",
              pinCode: " ",
              country: " ",
            }
          ],
          permanent_Address: [
            {
              house_Number: " ",
              village: " ",
              landmarks: " ",
              city: " ",
              state: " ",
              pinCode: " ",
              country: " ",
            }
          ],
          identification_Details: [
            {
              adhaar_Card: " ",
              pan_Card: " ",
              voter_Card: " ",
              passport_Number: " ",
              driving_License: " ",
              vehicle_Regd_No: " ",
            }
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
            }
          ],
          educational_Details: [{
            qualification: " ",
            stream: " ",
            session: " ",
            year_of_Passing: " ",
          }],
        },
      })
        .then(() => {
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
      setName("");
      setEmail("");
      setPhone("")
      setAddress("");
    };

    }


    // if (doc.exists) {

    //   alert("number is already in use")
    // }

    // else {
   




const invite = (user) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ email: user.email, phone: user.phone }),
    redirect: 'follow'
  };

  fetch("http://localhost:3005/send_mail", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

return (
  <>
    <form className="form" onSubmit={handleSubmit}>
      <h1>User Table </h1>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">``
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Full Name" name="fullName"
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
          <input type="number" className="form-control" placeholder="Mobile" name="mobile"
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
          <input className="form-control" placeholder="Email" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea className="form-control" placeholder="Address" name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Button type="submit" className="rounded-pill my-3" color="secondary-blue"
          style={{ backgroundColor: "blue", color: 'white', borderColor: "blue", marginLeft: "37%" }}>
          Save
        </Button>
      </div>
      <div  >
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>User Table</h1>
      </div>
    </form>
    <Grid item xs={6}>
      <Grid xs={6} >
        <table className="table table-borderless table-stripped" >
          <thead className="thead-light">
            <tr >
              <th>Full Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Actions</th>
              <th>Invite</th>
            </tr>
          </thead>
          <tbody >
            {
              userCollection?.map((id) => {
                return (
                  <tr>
                    <td>{id.details.name}</td>
                    <td>{id.details.phone}</td>
                    <td>{id.details.email}</td>
                    <button onClick={() => { this.editRecord(id.id) }}>edit</button>
                    <button onClick={() => { this.deletRecord(id.id) }}>delete</button>
                    <td> <button onClick={() => { invite(id.details) }}>Invite</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Grid>
    </Grid>
    <Grid xs={6}>
    </Grid>
  </>
);
};
export default Contacts;