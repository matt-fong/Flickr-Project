import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllTagsThunk } from '../../store/tag';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";
import './TagSearch.css'

const TagSearch = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const comments = useSelector(state => state.comments)

  const tagname = useParams().tagname;

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

  console.log('THIS IS THE FINAL FILTERED ARRAY', finalFiltered)

  useEffect(() => {
    dispatch(getAllTagsThunk())
    dispatch(getAllImagesThunk())
    dispatch(getAllCommentsThunk())
  }, [dispatch])

  return (
    <div className='tagsearch-outer-container'>
      <div className="tagsearch-container">
        <div className="tagsearch-inner-container">
          <div className="tagsearch-images-container">
            {finalFiltered.map((image) => {
              return (
                <div key={image?.id}>
                  <ImageCard image={image} comments={comments}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagSearch;
