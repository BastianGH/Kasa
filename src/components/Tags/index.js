import '../../styles/components/tags.css';

function Tags(props) {
    const tags = props.tags; 
    console.log("Tags are : ")
    console.log(tags)

    return (
      <div className="rate">
        <span>{tags}</span>
      </div>
    );
}

export default Tags;
