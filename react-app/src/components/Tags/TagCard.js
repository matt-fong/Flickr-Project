import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getAllTagsThunk } from '../../store/tag';
import { createTagThunk } from '../../store/tag';
import { deleteTagThunk } from '../../store/tag';
import './TagCard.css'
import CreateTag from './CreateTag';

const TagCard = ({ tag }) => {

  const history = useHistory()
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)
  const tags = useSelector((state) => state.tags)

  // console.log('THIS IS TAGS', tags)

  const handleCreateTag = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: 1,
      name: 'TESTING NEW'
    }

    return dispatch(createTagThunk(data))
  }

  const handleDeleteTag = (e) => {
    e.preventDefault();

    return dispatch(deleteTagThunk(1))

  }

  useEffect(() => {
    dispatch(getAllTagsThunk())
  }, [dispatch])


  return (
    <div className='tag-card-tag'>{tag?.name}</div>
  )
}

export default TagCard;
