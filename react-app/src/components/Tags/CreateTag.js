import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { createTagThunk } from '../../store/tag';
import { getAllTagsThunk } from '../../store/tag';
import './CreateTag.css'

const CreateTag = ({ imageId }) => {

  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const tags = useSelector((state) => state.tags)

  const handleCreateTag = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: imageId,
      name: name.toLowerCase()
    }

    setSubmitted(true);
    setName("")

    if (name.length > 0 && name.length < 21) {
      return dispatch(createTagThunk(data))
    }
  }

  useEffect(() => {
    dispatch(getAllTagsThunk())
  }, [dispatch])

  return (
    <div className='create-tag-container'>

      <div className='create-tag-inner-container'>

        <form>
          <textarea
            className='create-tag-input'
            type='text'
            value={name}
            placeholder='Add a tag'
            onChange={(e) => setName(e.target.value)}
            />
        </form>

        <div className='create-tag-button-container'>
          <button className='create-tag-button' onClick={handleCreateTag}>Create Tag</button>
        </div>

      </div>
    </div>
  );
}

export default CreateTag;
