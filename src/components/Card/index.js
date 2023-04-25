import '../../styles/components/card.css';

function Card(props) {
    const location = props.Location
    return (
      <figure className="card">
        <a href="" >
            <img src={location.pictures[0]} alt={location.title} className="card-img"/>
            <figcaption className="card-caption">
                <span className="card-caption_text">{location.title}</span>
            </figcaption>
        </a>
      </figure>
    );
}

export default Card;
