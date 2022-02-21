const About = () => {
  return (
    <div className="about-container">
      <h1 className="header-text">
        Restroom Resource: The Importance of All-Gender Restrooms
      </h1>
      <p className="about">
        All-gender restrooms are just what they sound like: restrooms that
        people of all genders can use!
      </p>
      <p className="about">
        Access to appropriate restrooms in public places is an important
        concern.
      </p>
      <p className="about">
        According to the{" "}
        <a
          href="https://transequality.org/sites/default/files/docs/resources/NTDS_Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          2012 National Transgender Discrimination Study
        </a>
        , more than 1 in 4 students and nearly 1 in 4 employees reported being
        denied access to gender-appropriate restrooms at school or work (Grant,
        Mottet, & Tanis, 2012).
      </p>
      <p className="about">
        There are a wide variety of reasons why someone might need to use an
        all-gender restroom. Like many changes developed for certain
        populations, they tend to benefit a variety of people far beyond their
        target group. When people are out in public, thinking about where to
        find an appropriate restroom can cause stress. The Restroom Resource is
        designed to help people locate all-gender restrooms that are safe to
        use.
      </p>
      <p className="about">
        Restroom Resource pulls data from the Refuge Restrooms API. This data is
        self-reported from people like you, which means it can have variations
        and inaccuracies. If you see inaccurate data, please visit{" "}
        <a
          href="https://www.refugerestrooms.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Refuge Restrooms
        </a>{" "}
        to report it.
      </p>
    </div>
  );
};

export default About;
