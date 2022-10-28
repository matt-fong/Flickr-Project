import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import { getAllUsersThunk } from "../../store/user";
import { Link } from "react-router-dom";
// import './ImageCard.css';

const ImageCard = ({ image }) => {

  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  const users = useSelector(state => state.users)

  const imageOwner = users[image?.userId]

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllUsersThunk())
  }, [dispatch])


  return (
    <div className="image-container" key={''}>
      <Link to={`/image/${image.id}`}>
        <img className="image" src={image.imageUrl} alt=""></img>
        <div className="middle">
          <div className="text">{image.title}</div>
          <div className="text">{`by ${imageOwner?.first_name} ${imageOwner?.last_name}`}</div>
        </div>
      </Link>
  </div>
  );
};

export default ImageCard;
