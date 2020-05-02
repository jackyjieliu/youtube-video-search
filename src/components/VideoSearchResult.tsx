import * as React from 'react';
import './VideoSearchResult.css';
import { YoutubeResult } from '../store/search/searchEffects';

/**
 * A placeholder to take up space before the image loads.
 */
const ImagePlaceholder = function () {
  return <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"></svg>
}

interface Props {
  item: YoutubeResult
}

/**
 * Renders a single video result
 */
export default class VideoSearchResult extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageLoaded: false
    };
  }

  render() {
    const YOUTUBE_LINK_PREFIX = 'https://www.youtube.com/watch?v=';
    const youtubeLink = YOUTUBE_LINK_PREFIX + this.props.item.videoId;
    const title = this.props.item.title;
    const vidoeImage = this.props.item.thumbnails.medium.url;

    return (

      <div className='video-search-result'>
        <a className='youtube-link' href={youtubeLink} target='_blank'>
          <div className='image-container'>
            <img className='video-image' src={vidoeImage}></img>
            <div className='video-image-placeholder' ><ImagePlaceholder /></div>
          </div>
          <div className='video-title' dangerouslySetInnerHTML={{ __html: title }}></div>
        </a>
      </div>
    );
  }
}
