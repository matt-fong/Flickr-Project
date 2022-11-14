import { useDispatch, useSelector } from 'react-redux'
import { deleteTagThunk } from '../../store/tag';
import './TagCard.css'

const TagCard = ({ tag }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)

  const handleDeleteTag = (e) => {
    e.preventDefault();

    return dispatch(deleteTagThunk(tag?.id))
  }


  let tagCard;

  if (tag?.userId === user?.id) {
    tagCard = (
      <div className='tag-card-tag' style={{ paddingRight: 26 }}>{tag?.name}
      <i className="tag-card-delete-button fa-solid fa-trash" onClick={handleDeleteTag}></i></div>
    )
  } else {
    tagCard = (
      <div className='tag-card-tag' style={{ paddingRight: 10 }}>{tag?.name}</div>
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
