
import sinon, { SinonStub } from 'sinon';
import * as searchEffects from './searchEffects';

describe('searchEffects', () => {

  function mockFetch(stub: SinonStub) {
    return jest.fn().mockImplementation(
      stub
    );
  }

  const mockResult = {
    items: [{
      id: {
        videoId: 'video1'
      },
      snippet: {
        title: 'title1',
        thumbnails: {
          default: {
            url: 'default-url-1',
            width: 120,
            height: 90
          },
          medium: {
            url: 'medium-url-1',
            width: 320,
            height: 180
          },
          high: {
            url: 'high-url-1',
            width: 480,
            height: 360
          }
        },
      }
    }]
  }

  let fetchStub: SinonStub;

  beforeEach(() => {
    fetchStub = sinon.stub().returns(Promise.resolve({
      ok: true,
      json: () => mockResult
    }));
    window.fetch = mockFetch(fetchStub);
  })

  it('should fetch videos from proper url', () => {
    searchEffects.searchYoutube('searchTerm');
    expect(fetchStub.getCall(0).args[0]).toContain('searchTerm');
  });

  it('should format video result', () => {
    const expectedResult = [{
      id: 'video1',
      videoId: 'video1',
      title: 'title1',
      thumbnails: {
        default: {
          url: 'default-url-1',
          width: 120,
          height: 90
        },
        medium: {
          url: 'medium-url-1',
          width: 320,
          height: 180
        },
        high: {
          url: 'high-url-1',
          width: 480,
          height: 360
        }
      },
    }]
    return searchEffects.searchYoutube('searchTerm')
      .then((videos) => {

        expect(videos).toEqual(expectedResult);
      });
  });
});
