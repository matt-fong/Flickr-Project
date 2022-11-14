import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import { getAllImagesThunk } from "../../store/image";
import { getAllUsersThunk } from "../../store/user";
import { getAllLikesThunk } from "../../store/like";
import { deleteLikeThunk } from '../../store/like';
import { createLikeThunk } from '../../store/like';
// import { getAllCommentsThunk } from "../../store/comment";
import { Link } from "react-router-dom";
import './ImageCard.css';

const ImageCard = ({ image, comments, likes, users }) => {

  const dispatch = useDispatch();

  // const users = useSelector(state => state.users)
  // const comments = useSelector(state => state.comments)
  const imageOwner = users[image?.userId]

  const commentArr = Object.values(comments)

  const photoComments = commentArr.filter(comment => comment?.imageId === image?.id)

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
    // dispatch(getAllImagesThunk())
    // dispatch(getAllUsersThunk())
    // dispatch(getAllLikesThunk())
    // dispatch(getAllCommentsThunk())
  }, [dispatch])

  const user = useSelector((state) => state.session.user)
  // const likes = useSelector((state) => state.likes)

  const likesArr = Object.values(likes)
  const userLiked = likesArr.filter(like => like?.userId === user?.id && like?.imageId === Number(image.id))
  const photoLikes = likesArr.filter(like => like?.imageId === Number(image.id))

  const handleCreateLike = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: image.id,
    }

    return dispatch(createLikeThunk(data)).then(dispatch(getAllLikesThunk()))
  }

  const handleDeleteLike = (e) => {
    e.preventDefault();

    for (let i = 0; i < likesArr.length; i++) {
      if (likesArr[i]?.userId === user?.id && likesArr[i]?.imageId === Number(image.id)) {
        return dispatch(deleteLikeThunk(likesArr[i]?.id)).then(dispatch(getAllLikesThunk()))
      }
    }
  }

  let conditional;

  if (userLiked.length > 0) {
    conditional = (
      <div className='image-card-like-container' onClick={handleDeleteLike}>
        <i className="fa-solid fa-heart image-card-unfilled"></i>
      </div>
    )
  } else {
    conditional = (
      <div className='image-card-like-container' onClick={handleCreateLike}>
        <i className="fa-regular fa-heart image-card-filled"></i>
      </div>
    )
  }


  return (
    <div className="image-card-container" key={''}>
      <Link to={`/image/${image?.id}`}>
        <img className="image-card-image" src={image?.imageUrl} alt="" onError={e => { e.currentTarget.src = "https://demofree.sirv.com/nope-not-here.jpg"; }}></img>
        <div className="image-card-text-container">
          <div>
            <div className="image-card-text-title">{title}</div>
            <div className="image-card-text-name">{`by ${firstname} ${lastname}`}</div>
          </div>
        </div>


        <div className='image-card-bottom-right-container'>

          <div className='image-card-bottom-right'>

            <div className="image-card-like">

              {conditional}

              <div className="image-card-length">
                {photoLikes?.length}
              </div>

            </div>


            <div className="image-card-comment">

              <i className="fa-regular fa-comment imagecardtest"></i>

              <div className="image-card-length">
                {photoComments?.length}
              </div>

            </div>

          </div>

        </div>

      </Link>
    </div>
  );
};

export default ImageCard;
