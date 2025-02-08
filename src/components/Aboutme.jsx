import profileImage from '../assets/profile-image.png'

const AboutMe  = ()=> {

    
    return (
        <section className="about-me-section" id="about">
      <center><h2>About Me</h2></center>
      <div className="flex-container about-me-container">
        <div><img src={profileImage} alt="profile-image" /></div>
        <div className="bio-container">
          <h4>Anzol Neupane</h4>
          <p>Hi, I am a software developer with a primarily focused on full-stack development. I love exploring new technologies and building innovative applications. My goal is to create user-friendly solutions that improve experiences and make processes more efficient. Im always learning and staying up-to-date with the latest trends to keep my skills sharp and deliver the best results. For me, its all about creating impactful, easy-to-use tools that make a difference.
          </p>
        </div>
      </div>
    </section>

    )

}
export default AboutMe

