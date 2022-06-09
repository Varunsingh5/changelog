import React from 'react';

const Profile = () => {
  return (
    <div>
    <section className="section about-section gray-bg" id="about">
    <div className="container">
        <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
                <div className="about-text go-to">
                    <h3 class="dark-color" style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>About Me</h3>
                    <h6 class="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                    <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> <br/>
                    <div className="row about-list">
                        <div className="col-md-6">
                          <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Skills</h3>
                            <div className="media">
                                <label>Programming:</label>
                                <p>Java,CSS</p>
                            </div>
                            <div className="media">
                                <label>Web & Scripting:</label>
                                <p>HTML, JavaScript</p>
                            </div>
                            <div className="media">
                                <label>Database:</label>
                                <p>SQL, MySQL, SQLite</p>
                            </div>
                            <div className="media">
                                <label>Tools:</label>
                                <p>React JS, React Native</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                          <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Office Contact</h3>
                            <div className="media">
                                <label>Phone No.:</label>
                                <p>4552415789</p>
                            </div>
                            <div className="media">
                                <label>Email:</label>
                                <p>abc@gmail.com</p>
                            </div>
                            <div className="media">
                                <label>Skype:</label>
                                <p>skype.0404</p>
                            </div>
                            <div className="media">
                                <label>LinkedIn:</label>
                                <p>abc2235/LinkedIn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
            
            <div className="col-lg-6">
                <div className="about-avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/>
                </div>
            </div>
        </div>
        <div className="counter">
            <div className="row">
                <div className="col-6 col-lg-3">
                  <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Home Contacts</h3>
                <div className="media">
                                <label>E-mail:</label>
                                <p>info@domain.com</p>
                            </div>
                            <div className="media">
                                <label>Phone:</label>
                                <p>820-885-3321</p>
                            </div>
                            {/* <div className="media">
                                <label>Skype</label>
                                <p>skype.0404</p>
                            </div>
                            <div className="media">
                                <label>Freelance</label>
                                <p>Available</p>
                            </div> */}
                </div>
                <div className="col-6 col-lg-3">
                <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Current Address</h3>
                <div className="media">
                                <label>House No./Flat No.:</label>
                                <p>HE126</p>
                            </div>
                            <div className="media">
                                <label>Vill./Area/Block:</label>
                                <p>Block-B</p>
                            </div>
                            <div className="media">
                                <label>Landmarks:</label>
                                <p>Near Flower Market</p>
                            </div>
                            <div className="media">
                                <label>City:</label>
                                <p>Mohali</p>
                            </div>
                            <div className="media">
                                <label>State:</label>
                                <p>Punjab</p>
                            </div>
                            <div className="media">
                                <label>PinCode:</label>
                                <p>160062</p>
                            </div>
                            <div className="media">
                                <label>Country:</label>
                                <p>India</p>
                            </div>
                </div>
                <div className="col-6 col-lg-3">
                  <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Permanent Address</h3>
                  <div className="media">
                                <label>House No./Flat No.:</label>
                                <p>HE126</p>
                            </div>
                            <div className="media">
                                <label>Vill./Area/Block:</label>
                                <p>Block-B</p>
                            </div>
                            <div className="media">
                                <label>Landmarks:</label>
                                <p>Near Flower Market</p>
                            </div>
                            <div className="media">
                                <label>City:</label>
                                <p>Mohali</p>
                            </div>
                            <div className="media">
                                <label>State:</label>
                                <p>Punjab</p>
                            </div>
                            <div className="media">
                                <label>PinCode:</label>
                                <p>160062</p>
                            </div>
                            <div className="media">
                                <label>Country:</label>
                                <p>India</p>
                            </div>
                </div>
                <div className="col-6 col-lg-3">
                  <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Identification Details</h3>
                <div className="media">
                                <label>Adhaar Card:</label>
                                <p>9245 1572 0045</p>
                            </div>
                            <div className="media">
                                <label>PanCard:</label>
                                <p>DXNPK2278M</p>
                            </div>
                            <div className="media">
                                <label>VoterCard:</label>
                                <p>12487521445</p>
                            </div>
                            <div className="media">
                                <label>Passport No.</label>
                                <p>Not Available</p>
                            </div>
                            <div className="media">
                                <label>Driving License:</label>
                                <p>Not Available</p>
                            </div>
                            <div className="media">
                                <label>Vehicle Regd No.:</label>
                                <p>UP80EZ4793</p>
                            </div>
                </div>
            </div>
        </div>
        <br/><br/>
        <div className="counter">
            <div className="row">
                <div className="col-6 col-lg-3">
                  <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Personal Details</h3>
                <div className="media">
                                <label>Father's Name:</label>
                                <p>Mr. ABC</p>
                            </div>
                            <div className="media">
                                <label>Mother's Name:</label>
                                <p>Mrs. DEF</p>
                            </div>
                            <div className="media">
                                <label>Marital Status:</label>
                                <p>Married</p>
                            </div>
                            <div className="media">
                                <label>D.O.B:</label>
                                <p> 05/06/1995</p>
                            </div>
                            <div className="media">
                                <label>Hobbies:</label>
                                <p>Reading Books, Travelling</p>
                            </div>
                            <div className="media">
                                <label>Blood Group:</label>
                                <p>A+ve</p>
                            </div>
                            <div className="media">
                                <label>Nationality:</label>
                                <p>Indian</p>
                            </div>
                </div>
                <div className="col-6 col-lg-3">
                <h3 style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Educational Details</h3>
                <div className="media">
                                <label>Qualification:</label>
                                <p>Masters & PhD</p>
                            </div>
                            <div className="media">
                                <label>Stream:</label>
                                <p>MCA</p>
                            </div>
                            <div className="media">
                                <label>Session:</label>
                                <p>2018-2022</p>
                            </div>
                            <div className="media">
                                <label>Year of Passing:</label>
                                <p>2022</p>
                            </div>
                </div>
                {/* <div className="col-6 col-lg-3">
                  <h3>Permanent Address</h3>
                <div className="media">
                                <label>E-mail</label>
                                <p>info@domain.com</p>
                            </div>
                            <div className="media">
                                <label>Phone</label>
                                <p>820-885-3321</p>
                            </div>
                            <div className="media">
                                <label>Skype</label>
                                <p>skype.0404</p>
                            </div>
                            <div className="media">
                                <label>Freelance</label>
                                <p>Available</p>
                            </div>
                </div>
                <div className="col-6 col-lg-3">
                  <h3>Identification Details</h3>
                <div className="media">
                                <label>E-mail</label>
                                <p>info@domain.com</p>
                            </div>
                            <div className="media">
                                <label>Phone</label>
                                <p>820-885-3321</p>
                            </div>
                            <div className="media">
                                <label>Skype</label>
                                <p>skype.0404</p>
                            </div>
                            <div className="media">
                                <label>Freelance</label>
                                <p>Available</p>
                            </div>
                </div> */}
            </div>
        </div>
    </div>
</section>
</div>
  );
};

export default Profile;
