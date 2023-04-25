import '../../styles/components/card.css';

function Banner(props) {
  const img = props.Img
    return (
      <div>
        <img src={img} alt="" />
        <span>Ici la banner</span>
      </div>
    );
}

export default Banner;