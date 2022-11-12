import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getAllTagsThunk } from '../../store/tag';

const TagCard = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  const tags = useSelector((state) => state.tags)

  console.log('THIS IS TAGS', tags)

  useEffect(() => {
    dispatch(getAllTagsThunk())
  }, [dispatch])


  return (
    <div>TESTING</div>
  )
}

export default TagCard;
