import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';
import { getAllCommentsThunk } from '../../store/comment';
import './ImageDetails.css'
import CommentCard from '../CommentCard/CommentCard';
import { getAllUsersThunk } from '../../store/user';
import CreateComment from '../Comments/CreateComment';
import { getAllLikesThunk } from '../../store/like';
import LikeButton from '../Likes/LikeButton';
import CreateTag from '../Tags/CreateTag';
import { getAllTagsThunk } from '../../store/tag';
import TagCard from '../Tags/TagCard';

const ImageDetails = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const imageId = useParams();

  const images = useSelector(state => state.images)
  const user = useSelector(state => state.session.user)
  const comments = useSelector(state => state.comments)
  const users = useSelector(state => state.users)
  const likes = useSelector(state => state.likes)
  const tags = useSelector(state => state.tags)

  const currentImage = images[imageId.imageId]
  const imageOwner = users[currentImage?.userId]

  const commentsArr = Object.values(comments)
  const filteredComments = commentsArr.filter(comment => comment.imageId === Number(imageId.imageId))

  const tagsArr = Object.values(tags)
  const filteredTags = tagsArr.filter(tag => tag.imageId === Number(imageId.imageId))

  const handleDelete = (imageId) => {
    dispatch(deleteImageThunk(imageId)).then(() => history.push(`/explore`))
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllCommentsThunk())
    dispatch(getAllUsersThunk())
    dispatch(getAllLikesThunk())
    dispatch(getAllTagsThunk())
  }, [dispatch])

  const imageLikes = Object.values(likes).filter(like => like.imageId === Number(imageId.imageId))

  return (
    <div className='image-detail-container'>

      <div className='image-detail-top'>

        <div className='image-detail-image-container'>
          <img className='image-detail-image' src={currentImage?.imageUrl} alt=''
          onError={e => { e.currentTarget.src = "https://demofree.sirv.com/nope-not-here.jpg"; }}
          ></img>
          {/* <div className='image-detail-title'>{currentImage?.title}</div> */}
        </div>

        { user?.id === currentImage?.userId && (
          <div>
            <i class="image-detail-update-button fa-solid fa-pen-to-square fa-2xl"
              onClick={() => history.push(`/image/${imageId.imageId}/edit`)}></i>

            <i class="image-detail-delete-button fa-solid fa-trash fa-2xl"
              onClick={() => handleDelete(imageId.imageId)}></i>
          </div>
        )}



      </div>

      <div className='image-detail-bottom'>

        <div className='image-detail-inner-bottom'>

          <div className='image-detail-bottom-left'>
            <div className='image-detail-user-card'>

              <div className='image-detail-user-card-pic-container'>
                <img className='image-detail-user-card-pic' onClick={() => history.push(`/you/${imageOwner?.username}`)} src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png' alt=''></img>
              </div>

              <div className='image-detail-user-card-right'>
                <div className='image-detail-user-card-name' onClick={() => history.push(`/you/${imageOwner?.username}`)}>{`${imageOwner?.first_name} ${imageOwner?.last_name}`}</div>
                <div className='image-detail-user-card-title'>{currentImage?.title}</div>
                <div className='image-detail-user-card-description'>{currentImage?.description}</div>
              </div>

            </div>


            <div className='image-detail-comment-card-container'>
            <div className='image-detail-comment-header'>{`Comments (${filteredComments?.length})`}</div>
              {filteredComments.map((comment) => (
                <div key={comment.id}>
                  <CommentCard comment={comment}/>
                  </div>
              ))}
            </div>

            <div>
              <CreateComment imageId={imageId?.imageId}/>
            </div>

          </div>

          <div className='image-detail-bottom-right'>

            <div className='image-detail-stats-container'>
              <div className='image-detail-stats'>

                  <div className='image-detail-stats-likes'>
                    <div className='image-detail-stats-top'>{`${imageLikes?.length}`}</div>
                    <div className='image-detail-stats-bottom'>likes</div>
                  </div>

                  <div className='image-detail-stats-comments'>
                    <div className='image-detail-stats-top'>{filteredComments?.length}</div>
                    <div className='image-detail-stats-bottom'>comments</div>
                  </div>

                  <LikeButton imageId={imageId?.imageId} />

              </div>

            </div>


            <div className='image-detail-tags-container'>
              <div className='image-detail-tags-inner-container'>

                <div className='image-detail-tag-header'>
                  <div className='image-detail-tag'>Tags</div>
                  <div className='image-detail-tag-add'>Add tags</div>
                </div>

                <div className='image-detail-create-tag'>
                  <CreateTag imageId={imageId?.imageId}/>
                </div>

                <div className='image-detail-tag-card-container'>
                  {filteredTags.map((tag) => (
                    <TagCard tag={tag}/>
                  ))}
                </div>

              </div>
            </div>

          </div>


        </div>

      </div>


    </div>
  )
}

export default ImageDetails;
