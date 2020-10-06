import React, {Component} from "react";

class AboutMe extends Component{
    render()

    if(this.props.data){
        let name = this.props.data.name;
        let profilePic ="images/"+this.props.data.image;
        let bio = this.props.data.bio;
        let city = this.props.data.address.city;
        let state = this.props.data.address.state;
        let zip = this.props.data.address.zip;
        let phone = this.props.data.phone;
        let email = this.props.data.email;
        let resumeDownload = this.props.data.resumedownload;
    }

    return(
        <section id="aboutMe">
        <div className="row">
            <div className="three colums">
                <div className="profile-pic" src={profilepic} alt="WeddingPic.Pic"/>
            </div>
            <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city} {state}, {zip}
                     </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }


export default AboutMe;
           