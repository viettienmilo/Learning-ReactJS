export default function Entry(props) {
    const { img: { src, alt }, title, country, googleMapsLink, dates, text } = props;
    return (
        <article className="entry">
            <div className="thumbnail-container">
                <img className="thumbnail-img" src={src} alt={alt} />
            </div>

            <div className="details">
                <div className="location">
                    <img className="marker" src="../src/assets/marker.png" alt="marker" />
                    <span className="country">{country}</span>
                    <a className="lat-lon" href={googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <p><b>{dates}</b></p>
                <div className="description">{text}</div>
            </div>
        </article>
    );
}