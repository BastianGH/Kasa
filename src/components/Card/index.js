import '../../styles/components/card.css';

function Card(props) {
    const location = props.Location
    return (
      <figure>
        <a href="" >
            <img src={location.pictures[0]} alt={location.title} />
            <figcaption>
                <span>{location.title}</span>
            </figcaption>
        </a>
      </figure>
    );
}

export default Card;
