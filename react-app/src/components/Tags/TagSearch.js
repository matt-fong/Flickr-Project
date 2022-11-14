import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllTagsThunk } from '../../store/tag';
import { getAllImagesThunk } from '../../store/image';

const TagSearch = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const tagname = useParams().tagname;

  const tags = useSelector(state => state.tags);
  const tagsArr = Object.values(tags);

  const images = useSelector(state => state.images);
  const imagesArr = Object.values(images);

  const filteredTags = tagsArr.filter(tag => tag.name === tagname);

  // console.log('THIS IS FILTERED TAGS', filteredTags)
//
  let eventIdArr = [];

  for (let i = 0; i < filteredTags.length; i++) {
    if (!eventIdArr.includes(filteredTags[i].imageId)) {
      eventIdArr.push(filteredTags[i].imageId)
    }
  }

  // console.log('THIS IS EVENT ID ARR', eventIdArr)

  const filteredImages = imagesArr.filter(image => eventIdArr.includes(image.id))

  console.log('THIS IS FILTERED IMAGES', filteredImages)

  useEffect(() => {
    dispatch(getAllTagsThunk())
    dispatch(getAllImagesThunk())
  }, [dispatch])

  return (
    <div>TESTING</div>
  )
}

export default TagSearch;
