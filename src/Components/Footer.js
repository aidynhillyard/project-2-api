import github from "../images/icongithub.png";
import email from "../images/iconenvelope.png";
import linkedin from "../images/iconlinkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-container">
        <a href="https://github.com/aidynhillyard">
          <img src={github} alt="GitHub icon" className="social-media-icon" />
        </a>
        <a href="mailto:aidyn.hillyard@gmail.com?subject=AidynHillyard.com&body=Message">
          <img src={email} alt="Envelope icon" className="social-media-icon" />
        </a>
        <a href="https://www.linkedin.com/in/aidynhillyard">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="social-media-icon"
          />
        </a>
      </div>
      <p>
        Designed and coded by Aidyn Hillyard (zie/hir/hirs), 2022. Restroom data
        from <a href="https://www.refugerestrooms.org/">Refuge Restrooms</a>.
      </p>
    </div>
  );
};

export default Footer;
