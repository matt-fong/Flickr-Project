import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { createTagThunk } from '../../store/tag';
import './CreateTag.css'

const CreateTag = ({ imageId }) => {

  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const handleCreateTag = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: imageId,
      name: name.toLowerCase()
    }

    setSubmitted(true);

    for (let i = 0; i < name.length; i++) {
      if (name.length > 0 && name.length < 21 && errors.length === 0) {
        return dispatch(createTagThunk(data)).then(setName("")).then(setSubmitted(false))
      }
    }
  }

  useEffect((e) => {
    let errors = [];

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    if (name.length < 1 || name.length > 20) {
      errors.push('Tag must be between 1 and 20 characters.')
    }

    for (let i = 0; i < name.length; i++) {
      if (!alphabet.includes(name[i])) {
        errors.push('Tag must contain only letters.')
        break
      }
    }

    setErrors(errors)

  }, [name])

  return (
    <div className='create-tag-container'>

      <div className='create-tag-inner-container'>

        <form>
          <textarea
            className='create-tag-input'
            type='text'
            value={name}
            placeholder='Add a tag'
            onKeyPress={(e) => {if (e.key === "Enter") {handleCreateTag(e)}}}
            onChange={(e) => setName(e.target.value)}
            />
        </form>

        <div className='create-tag-error-container'>
          {submitted && errors.map((error) => (
            <div className='create-comment-error'>{error}</div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CreateTag;
