import * as React from 'react';
import './VideoSearchResult.css';
import { YoutubeResult } from '../store/search/searchEffects';
// import svgPlaceholder from '../placeholder.svg';

const SvgPlaceholder = function() {
  return <svg height="180px"  width="320px" xmlns="http://www.w3.org/2000/svg"></svg>;
}

interface Props {
  result: YoutubeResult
}


export default class VideoSearchResult extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageLoaded: false
    };
  }

  render() {
    const youtubeLink = 'https://www.youtube.com/watch?v=' + this.props.result.id.videoId;
    const title = this.props.result.snippet.title;
    const vidoeImage = this.props.result.snippet.thumbnails.medium.url;
    // let placeholderImage;

    return (

      <div className='video-search-result'>
        <a href={youtubeLink} target='_blank'>
          <div style={{ position: 'relative' }}>
            <img className='video-image' style={{ position: 'absolute' }}src={vidoeImage}></img>
            <div className='video-image' ><SvgPlaceholder/></div>
          </div>
          <div className='video-title' dangerouslySetInnerHTML={{ __html: title }}></div>
        </a>
      </div>
    );
  }
}
