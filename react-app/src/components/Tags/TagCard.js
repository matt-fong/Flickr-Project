import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getAllTagsThunk } from '../../store/tag';
import { createTagThunk } from '../../store/tag';
import { deleteTagThunk } from '../../store/tag';

const TagCard = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  const tags = useSelector((state) => state.tags)
  const user = useSelector((state) => state.session.user)

  console.log('THIS IS TAGS', tags)

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
    <div>
      <div onClick={handleCreateTag}>Create Tag</div>
      <div onClick={handleDeleteTag}>Delete Tag</div>
    </div>
  )
}

export default TagCard;
