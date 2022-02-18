import github from "../images/icongithub.png";
import email from "../images/iconenvelope.png";
import linkedin from "../images/iconlinkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-container">
        <a href="https://github.com/aidynhillyard" target="_blank">
          <img src={github} alt="GitHub icon" className="social-media-icon" />
        </a>
        <a href="mailto:aidyn.hillyard@gmail.com?subject=RestroomResource&body=Message">
          <img src={email} alt="Envelope icon" className="social-media-icon" />
        </a>
        <a href="https://www.linkedin.com/in/aidynhillyard" target="_blank">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="social-media-icon"
          />
        </a>
      </div>
      <p>
        Designed and coded by <a href="https://aidynhillyard.github.io/" target="_blank">Aidyn Hillyard</a> (zie/hir/hirs), 2022. Restroom data
        from <a href="https://www.refugerestrooms.org/" target="_blank">Refuge Restrooms</a>.
      </p>
    </div>
  );
};

export default Footer;
