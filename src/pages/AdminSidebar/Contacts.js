// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useEffect } from "react";
// import ContactForm from "./ContactForm"
// import { firebaseDb } from "../../firebase";
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { push, child, ref } from "firebase/database";


// const Contacts = () => {

//     var [contactObjects, setContactObjects] = useState({})
//     var [currentId, setCurrentId] = useState('')

//     // useEffect(() => {
//     //     // firebaseDb.child('contacts').on('value', snapshot => {
//     //     //     if (snapshot.val() != null)
//     //     //         setContactObjects({
//     //     //             ...snapshot.val()
//     //     //         })
//     //     //     else
//     //     //         setContactObjects({})

//     //     // })
//     // }, [])// similar to componentDidMount

//     const addOrEdit = obj => {

//         if (currentId === '')
//             firebaseDb.child('users').push(
//                 obj,
//                 err => {
//                     if (err)
//                         console.log(err)
//                     else
//                         setCurrentId('')
//                 }
//             )
//         else
//             firebaseDb.child(`users/${currentId}`).set(
//                 obj,
//                 err => {
//                     if (err)
//                         console.log(err)
//                     else
//                         setCurrentId('')
//                 }
//             )
//     }

//     const onDelete = key => {
//         if (window.confirm('Are you sure to delete this record?')) {
//             debugger
//             firebaseDb.child(`users/${key}`).remove(
//                 err => {
//                     if (err)
//                         console.log(err)
//                     else
//                         setCurrentId('')
//                 }
//             )
//         }
//     }

//     return (
//         <>
//             <div className="jumbotron jumbotron-fluid">
//                 <h1>User Table</h1>
//             </div>

//             <Grid item xs={6}>

//                 <Grid xs={6} >

//                     <table className="table table-borderless table-stripped" >

//                         <thead className="thead-light">

//                             <tr>
//                                 <th>Full Name</th>
//                                 <th>Mobile</th>
//                                 <th>Email</th>
//                                 <th>Actions</th>
//                             </tr>

//                         </thead>

//                         <tbody >
//                             {
//                                 Object.keys(contactObjects).map(id => {

//                                     return <tr key={id} >

//                                         <td>{contactObjects[id].fullName}</td>
//                                         <td>{contactObjects[id].mobile}</td>
//                                         <td>{contactObjects[id].email}</td>

//                                         <td>
//                                             <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
//                                                 <i className="fas fa-pencil-alt"></i>
//                                             </a>
//                                             <a className="btn text-danger" onClick={() => { onDelete(id) }}>
//                                                 <i className="far fa-trash-alt"></i>
//                                             </a>
//                                         </td>

//                                     </tr>
//                                 })
//                             }
//                         </tbody>
//                     </table>

//                 </Grid>

//             </Grid>

//             <Grid xs={6}>

//                 <ContactForm {...({ addOrEdit, currentId, contactObjects })} />

//             </Grid>



//         </>
//     );
// }

// export default Contacts;


import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { addDoc, getDocs, collection ,onSnapshot} from "firebase/firestore";
import { Button, } from "reactstrap";
import Grid from '@mui/material/Grid';
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState([
  ]);
  let userList,cities;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    await addDoc(collection(db, "userList"), {
      // db.collection("contacts")
      // .add({
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
    setPhone("")
    setAddress("");
  };
onSnapshot(collection(db, "userList"),(querySnapshot) => {
  let users = [];
  querySnapshot.forEach((doc) => {
      users.push(doc.data());
  });
     console.log("Current cities in CA: ", users);

});

  return (
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
          <input className="form-control" placeholder="Mobile" name="mobile"
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
      <div className=" " >
        {/*jumbotron jumbotron-fluid */}
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>User Table</h1>
      </div>
      <Grid item xs={6}>
        <Grid xs={6} >
          <table className="table table-borderless table-stripped" >
            <thead className="thead-light">
              <tr>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.address}</th>
                <th>{user.phone}</th>
              </tr>
            </thead>
            <tbody >
{/*
            {cities.map((student, index) => (
              <tr data-index={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}   */}
              {/* {
                cities.map(id => {
                  return <tr keys={id} >
                    <td>{cities.name}</td>
                    <td>{cities.phone}</td>
                    <td>{cities.email}</td>
                    <td>
                      <a className="btn text-primary" >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn text-danger" >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                })
              } */}
{
}
            </tbody>
          </table>
        </Grid>
      </Grid>
      <Grid xs={6}>
      </Grid>
    </form>
  );
};
export default Contacts;

