
import { CONFIG } from '../../config/config';
const SEARCH_TERM = 'SEARCH_TERM';
const API_KEY = 'API_KEY'
const API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=' + SEARCH_TERM + '&key=' + API_KEY

export async function searchYoutube(searchTerm: string): Promise<Array<YoutubeResult>> {
  const url = API_URL
    .replace(API_KEY, CONFIG.YOUTUBE_API_KEY)
    .replace(SEARCH_TERM, searchTerm);

  // const response = await fetch(url);
  const response = await fetch(searchTerm);
  const result = await response.json();

  const items: Array<RawYoutubeResult> = result.items;
  return items.map((item) => {
    return {
      id: item.id.videoId,
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumbnails: item.snippet.thumbnails,
    }
  });
}

export interface YoutubeResult {
  id: string;
  videoId: string;
  title: string;
  thumbnails: {
    default: ThumbnailDetails;
    medium: ThumbnailDetails;
    high: ThumbnailDetails;
  };
}

interface RawYoutubeResult {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      default: ThumbnailDetails;
      medium: ThumbnailDetails;
      high: ThumbnailDetails;
    }
  };
}

interface ThumbnailDetails {
  url: string;
  width: number;
  height: number;
}
