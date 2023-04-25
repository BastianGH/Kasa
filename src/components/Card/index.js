import '../../styles/components/card.css';

function Card(props) {
    const location = props.Location
    return (
      <figure class="card">
        <a href="" >
            <img src={location.pictures[0]} alt={location.title} class="card-img"/>
            <figcaption class="card-caption">
                <span class="card-caption_text">{location.title}</span>
            </figcaption>
        </a>
      </figure>
    );
}

export default Card;
