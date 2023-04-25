import '../../styles/components/banner.css';

function Banner(props) {
  const img = props.Img
  const title = props.Title
    return (
      <div className="banner">
        <img className="banner-img" src={img} alt="" />
        <span className="banner-text" >{title}</span>
      </div>
    );
}

export default Banner;