import '../../styles/components/banner.css';

function Banner(props) {
  const img = props.Img
  const title = props.Title
    return (
      <div class="banner">
        <img class="banner-img" src={img} alt="" />
        <span class="banner-text" >{title}</span>
      </div>
    );
}

export default Banner;