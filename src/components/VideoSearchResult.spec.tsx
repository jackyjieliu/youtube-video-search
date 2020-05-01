import React, { Component } from 'react';
import VideoSearchResult from './VideoSearchResult';
import { shallow } from 'enzyme';

describe('<VideoSearchResult>', () => {

  function setup(customProps?: any) {
    const props = Object.assign({
      item: {
        id: 'video-id',
        videoId: 'video-id',
        title: 'video-title-text',
        thumbnails: {
          default: {
            url: 'default-image-url',
            width: 1,
            height: 1,
          },
          medium: {
            url: 'medium-image-url',
            width: 2,
            height: 2,
          },
          high: {
            url: 'high-image-url',
            width: 3,
            height: 3,
          }
        },
      },
    }, customProps)

    const elem = shallow<VideoSearchResult>(<VideoSearchResult {...props} />);
    return elem;
  }

  it('should render youtube link', () => {

    const elem = setup();
    const expectedLink = 'https://www.youtube.com/watch?v=video-id';
    expect(elem.find('a[href="' + expectedLink + '"]').length).toEqual(1);
  });

  it('should render image', () => {

    const elem = setup();
    expect(elem.find('img.video-image[src="medium-image-url"]').length).toEqual(1);
  });

  it('should render title', () => {

    const elem = setup();
    expect(elem.find('.video-title').html()).toContain('video-title-text');
  });
});
