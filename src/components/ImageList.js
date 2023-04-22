import ImageShow from "./ImageShow";
import './imageList.css'

function ImageList( {images}) {
  const renderedImages = images.map((image) =>{
    return <ImageShow key={image.id} image={image}/>
  })
  return (
    <div class="image-list">{renderedImages} </div>
  );
}

export default ImageList;
