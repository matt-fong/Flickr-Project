import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getAllTagsThunk } from '../../store/tag';
import { deleteTagThunk } from '../../store/tag';
import './TagCard.css'
import CreateTag from './CreateTag';

const TagCard = ({ tag }) => {

  const history = useHistory()
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)
  const tags = useSelector((state) => state.tags)

  const handleDeleteTag = (e) => {
    e.preventDefault();

    return dispatch(deleteTagThunk(tag?.id))
  }

  useEffect(() => {
    dispatch(getAllTagsThunk())
  }, [dispatch])

  let tagCard;

  if (tag?.userId === user?.id) {
    tagCard = (
      <div className='tag-card-tag' style={{ paddingRight: 24 }}>{tag?.name}
      <i className="tag-card-delete-button fa-solid fa-trash" onClick={handleDeleteTag}></i></div>
    )
  } else {
    tagCard = (
      <div className='tag-card-tag'>{tag?.name}</div>
    )
  }

  return (
    <div className='tag-card-container'>
      {/* <div className='tag-card-tag'>{tag?.name}<i className="tag-card-delete-button fa-solid fa-trash"></i></div> */}
      {tagCard}
    </div>
  )
}

export default TagCard;
