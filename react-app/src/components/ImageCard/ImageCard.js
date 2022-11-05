import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import { getAllUsersThunk } from "../../store/user";
import { Link } from "react-router-dom";
import './ImageCard.css';

const ImageCard = ({ image }) => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users)

  const imageOwner = users[image?.userId]

  let title;
  let firstname;
  let lastname;

  if (image?.title?.length > 18) {
    title = (image?.title)?.slice(0, 18) + '...'
  } else {
    title = (image?.title)
  }

  if (imageOwner?.first_name?.length > 15) {
    firstname = (imageOwner?.first_name)?.slice(0, 15)+ '...'
  } else {
    firstname = (imageOwner?.first_name)?.slice(0, 15)
  }

  if (imageOwner?.last_name?.length > 15) {
    lastname = (imageOwner?.last_name)?.slice(0, 15) + '...'
  } else {
    lastname = (imageOwner?.last_name)?.slice(0, 15)
  }

  if (imageOwner?.last_name?.length + imageOwner?.first_name?.length > 30) {
    lastname = ''
  } else {
    lastname = (imageOwner?.last_name)
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllUsersThunk())
  }, [dispatch])


  return (
    <div className="image-card-container" key={''}>
      <Link to={`/image/${image?.id}`}>
        <img className="image-card-image" src={image?.imageUrl} alt=""
        onError={e => { e.currentTarget.src = "https://demofree.sirv.com/nope-not-here.jpg"; }}
        ></img>
        <div className="image-card-text-container">
          <div className="image-card-text-title">{title}</div>
          <div className="image-card-text-name">{`by ${firstname} ${lastname}`}</div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
