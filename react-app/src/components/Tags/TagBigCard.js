import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllTagsThunk } from '../../store/tag';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";
import { getAllLikesThunk } from '../../store/like';
import { getAllUsersThunk } from '../../store/user';
import './TagBigCard.css'

const TagBigCard = ({ tagname }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const tags = useSelector(state => state.tags);
  const tagsArr = Object.values(tags);

  const images = useSelector(state => state.images);
  const imagesArr = Object.values(images);

  // Filters all the tags that matches the tagname in url
  const filteredTags = tagsArr.filter(tag => tag.name === tagname);

  // Loops through the filtered tags and pushes all the imageIds of those tags into an array
  let eventIdArr = [];

  for (let i = 0; i < filteredTags.length; i++) {
    if (!eventIdArr.includes(filteredTags[i].imageId)) {
      eventIdArr.push(filteredTags[i].imageId)
    }
  }

  // Filters all the images that matches the imageIds in the eventIdArr (All the images that have the tagname in url)
  const filteredByTag = imagesArr.filter(image => eventIdArr.includes(image.id))

  // Filters all the images whose title matches the tagname in url
  const filteredByTitle = imagesArr.filter(image => image.title.toLowerCase().includes(tagname.toLowerCase()))

  // Comining the two arrays of images (Tagged and Title) into a single array
  const finalFiltered = filteredByTag.concat(filteredByTitle)

  const randomNum = Math.floor(Math.random() * finalFiltered.length)

  const randomImage = finalFiltered[randomNum]

  useEffect(() => {
    dispatch(getAllTagsThunk())
    dispatch(getAllImagesThunk())
  }, [dispatch])

  return (
    <div className='tagbigcard-container' onClick={() => history.push(`/tags/${tagname}`)}>
      <img className='tagbigcard-pic' src={randomImage?.imageUrl} alt=''></img>
      <div className='tagbigcard-text'>{tagname}</div>
    </div>
  )
}

export default TagBigCard;
