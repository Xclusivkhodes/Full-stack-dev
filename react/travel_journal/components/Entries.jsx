import marker from "../images/marker.png";

const Entries = ({
  entry: {
    img: { src, alt },
    country,
    dates,
    googleMapsLink,
    text,
    title,
  },
}) => {
  return (
    <div className="entries">
      <div className="entry">
        <img src={src} alt={alt} className="entries-img" />
        <div className="content">
          <div className="location">
            <div className="location-name">
              <img src={marker} alt="The location marker" className="marker" />
              <p className="country">{country.toLocaleUpperCase()}</p>
            </div>
            <a href={googleMapsLink} className="location-link">
              View on Google Maps
            </a>
          </div>
          <h2 className="location-title">{title}</h2>
          <p className="date">{dates}</p>
          <p className="location-description">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Entries;
