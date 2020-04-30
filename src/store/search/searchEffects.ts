
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=surfing&key=AIzaSyCX6NjWqI6vPMRmD2OTWz1ldh2Y9JmFFdo
import { CONFIG } from '../../config/config';
const SEARCH_TERM = 'SEARCH_TERM';
const API_KEY = 'API_KEY'
const API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=' + SEARCH_TERM + '&key=' + API_KEY

export async function searchYoutube(searchTerm: string): Promise<Array<YoutubeResult>> {
  const url = API_URL
    .replace(API_KEY, CONFIG.YOUTUBE_API_KEY)
    .replace(SEARCH_TERM, searchTerm);

  // const response = await fetch(url);
  // const result = await response.json();
  const result = mock;

  return result.items;
}


export interface YoutubeResult {
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


var mock = {
  "kind": "youtube#searchListResponse",
  "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/sHbOAZz4wQMP4mYetnCoq1l12z8\"",
  "nextPageToken": "CB4QAA",
  "regionCode": "US",
  "pageInfo": {
   "totalResults": 1000000,
   "resultsPerPage": 30
  },
  "items": [
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/APO2sD7TIgReVUOpigH2PbLAzhE\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "n0f3ILW1KUQ"
    },
    "snippet": {
     "publishedAt": "2020-04-29T19:02:28.000Z",
     "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
     "title": "SURFING MASSIVE 20FT PIPELINE &amp; HEAVY WIPEOUTS | PSYCH SESSIONS VOLUME V",
     "description": "AMAZING MOMENTS OF APRIL 2020'S SWELL IN HAWAII. HTTPS://WWW.JAMIEOBRIENSHOP.COM FOLLOW US: https://www.instagram.com/WHOISJOB/ ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/n0f3ILW1KUQ/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/n0f3ILW1KUQ/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/n0f3ILW1KUQ/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Jamie O'Brien",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/FMC4-pwCddTe1Kpv7mGFQH2n7tQ\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "pXUdYNaUxyo"
    },
    "snippet": {
     "publishedAt": "2020-04-29T18:00:19.000Z",
     "channelId": "UC_F4Iy5korq2mEWZDQhG07w",
     "title": "I ALMOST DIED SURFING PIPELINE! || WORST WIPEOUT EVER! || POV BARRELS!",
     "description": "This was one of the most hectic days of my life, I literally almost died Surfing Pipeline! On a good note I got some really fun rocky point and we are still allowed to ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/pXUdYNaUxyo/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/pXUdYNaUxyo/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/pXUdYNaUxyo/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Koa Rothman",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/t9T0fdMtTHmM3tS7KU3ozROFXj8\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "udZEXO41Q_w"
    },
    "snippet": {
     "publishedAt": "2020-04-27T19:00:16.000Z",
     "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
     "title": "SURFING GIANT PIPELINE! (HAWAII)",
     "description": "SNORKELING PIPELINE TO PICK UP TRASH AND CLEAN THE REEFS JUST IN TIME BEFORE A MASSIVE SWELL. TRADED IN MY FINS AND MASK FOR A ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/udZEXO41Q_w/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/udZEXO41Q_w/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/udZEXO41Q_w/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Jamie O'Brien",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/GM5bN6Pcl7AGXztPb_sYi1RDxio\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "hwLo7aU1Aas"
    },
    "snippet": {
     "publishedAt": "2019-12-26T15:09:18.000Z",
     "channelId": "UCKo-NbWOxnxBnU41b-AoKeA",
     "title": "The Best Surfing Clips of 2019",
     "description": "",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/hwLo7aU1Aas/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/hwLo7aU1Aas/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/hwLo7aU1Aas/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "SURFER",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/yfVam76dXHEx_BigZW-xV7NBxqE\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "W7h-Yho8EB0"
    },
    "snippet": {
     "publishedAt": "2019-06-15T15:21:45.000Z",
     "channelId": "UCqhnX4jA0A5paNd1v-zEysw",
     "title": "GoPro: Top 10 Surf Moments",
     "description": "Celebrate International Surf Day with GoPro's Top 10 Surf Moments. Shot 100% on GoPro: http://bit.ly/2wUMwfI Get stoked and subscribe: http://goo.gl/HgVXpQ ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/W7h-Yho8EB0/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/W7h-Yho8EB0/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/W7h-Yho8EB0/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "GoPro",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/RwulN8W48Cjuz5Deb-o1PMlm6Lo\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "257Hvj7DyuQ"
    },
    "snippet": {
     "publishedAt": "2020-04-24T21:57:07.000Z",
     "channelId": "UCf5CA0OsvhhU-6AcSjT1oKQ",
     "title": "Surfing the Wedge, Slater, 2 Kooks &amp; more! RAW - Bonus Footage",
     "description": "RAW Beefs TV bonus footage of Kalani Robb, Kelly Slater, Tyler Stanaland, Blair Conklin, Johnny Redmond, Kai Thompson, Craig Whetter, Tommy Cantrell, ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/257Hvj7DyuQ/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/257Hvj7DyuQ/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/257Hvj7DyuQ/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "BEEFS T.V.",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/6l2vwtWwaLwTKZeyQYrVT61XaGQ\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "VBy4l8YwqmM"
    },
    "snippet": {
     "publishedAt": "2020-04-22T18:00:10.000Z",
     "channelId": "UC_F4Iy5korq2mEWZDQhG07w",
     "title": "CRAZIEST PIPELINE EVER! || WAVE OF MY LIFE! || SURFING WITH NO LEASH!",
     "description": "I'm going to go ahead and say this was some of the best Pipeline I've seen in my life! I actually got my best waves this season so far, and possibly one of my best ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/VBy4l8YwqmM/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/VBy4l8YwqmM/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/VBy4l8YwqmM/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Koa Rothman",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/E8GZG_CZfJeaVF75eZYmJHnGe0c\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "rj7xMBxd5iY"
    },
    "snippet": {
     "publishedAt": "2017-11-12T11:09:52.000Z",
     "channelId": "UCiiFGfvlKvX3uzMovO3unaw",
     "title": "BIG WAVE SURFING COMPILATION 2017",
     "description": "BIG WAVE SURFING COMPILATION 2017 ** REVISED **AMAZING FOOTAGE ** WITH 60-100FT- HUGE SURF Please Subscribe if You Would like to see More ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Absolutely Flawless",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/XWyPkbiV-j7gjEJev9Cknl4DDQ0\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "caj9z17kuyw"
    },
    "snippet": {
     "publishedAt": "2019-11-07T19:00:04.000Z",
     "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
     "title": "SURFING GIANT WAVES IN HAWAII (PIPELINE)",
     "description": "WINTER IS HERE! WOKE UP TO GIANT SURF SO I HAD TO GET OUT THERE AND CATCH A FEW MYSELF! CHECK OUT MY MERCH: WWW.",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/caj9z17kuyw/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/caj9z17kuyw/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/caj9z17kuyw/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Jamie O'Brien",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/vRr-nhg2aqHKh4ZGjQRzSHo9xXo\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "vo1BzyBwZ1E"
    },
    "snippet": {
     "publishedAt": "2020-03-05T20:00:13.000Z",
     "channelId": "UCn8zNIfYAQNdrFRrr8oibKw",
     "title": "The Ice Beard Surfers of Lake Superior | Local Legends",
     "description": "Even in sub-zero temperatures in Upper Peninsula Michigan, you can find one man who surfs Lake Superior. Daniel Schetter, known as “Surfer Dan,” has ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/vo1BzyBwZ1E/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/vo1BzyBwZ1E/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/vo1BzyBwZ1E/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "VICE",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/-yv6D6NU1O-xT-0w2yM6cyHFX7U\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "NUCI-D79kY8"
    },
    "snippet": {
     "publishedAt": "2020-02-07T16:00:05.000Z",
     "channelId": "UCblfuW_4rakIf2h6aqANefA",
     "title": "What It Feels Like When You First Learn To Surf...",
     "description": "Ever struggled to learn how to surf? We know how that feels. Join pro surfer Isabella Gomez in our take of the first days of learning how to surf. It's not that easy, ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/NUCI-D79kY8/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/NUCI-D79kY8/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/NUCI-D79kY8/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Red Bull",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/z-4-8ZS7WBjxdAkQsCYIrkc2Yi4\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "OU4d3O_VZCk"
    },
    "snippet": {
     "publishedAt": "2020-02-06T19:00:04.000Z",
     "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
     "title": "SURFING WITH KELLY SLATER (HAWAII)",
     "description": "FUN BARRELS, BEATER SPINS, AND GOOD TIMES WITH SOME OF THE REDBULL SKATEBOARD TEAM! STAY PSYCHED MERCH! HTTP://WWW.",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/OU4d3O_VZCk/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/OU4d3O_VZCk/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/OU4d3O_VZCk/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Jamie O'Brien",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/f4B92xUeptcNLBwHd4cnYEjNyZE\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "eSwisMEtkBg"
    },
    "snippet": {
     "publishedAt": "2018-09-02T01:56:19.000Z",
     "channelId": "UCfn_qdZ1XMLRKIfMhexjooA",
     "title": "What Surfing Is Actually Like",
     "description": "The Gorpo I Use: https://amzn.to/2COZ1hQ The Mouth Mount I Use: https://amzn.to/2ClyqYM My Free Vlog Like A Pro Course: http://startavlog.com Favorite ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/eSwisMEtkBg/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/eSwisMEtkBg/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/eSwisMEtkBg/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Atua Mo'e",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/bvQ-0LCr9ly5UHmyDPWeZnn7Ktk\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "Cg7RTwLkie4"
    },
    "snippet": {
     "publishedAt": "2017-12-27T23:00:01.000Z",
     "channelId": "UCZFhj_r-MjoPCFVUo3E1ZRg",
     "title": "Roberson Brothers Have NO FEAR! | Young Surfing Prodigies",
     "description": "Justin, Eric & Steve Roberson have been surfing in Hawaii since they were just two-years-old. They're training to become the top surfers in the world and have ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/Cg7RTwLkie4/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/Cg7RTwLkie4/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/Cg7RTwLkie4/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Whistle",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/vhd3Bg7W7ZCFHFxg8OfKjdMjFcQ\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "_XLekfSYVGU"
    },
    "snippet": {
     "publishedAt": "2018-08-24T15:00:08.000Z",
     "channelId": "UCYd0us2OtW4d4-1cfpT2ktw",
     "title": "SURFING WITH THE NORRIS NUTS *youngest sister Is amazing*",
     "description": "Sibling support is everything. Naz Norris surfs a scary rock break for the first time by herself surfing with the support of the Norris Nuts. LAST VIDEO here ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/_XLekfSYVGU/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/_XLekfSYVGU/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/_XLekfSYVGU/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "The Norris Nuts",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/AD7sXFmNIsziect608vZjRHozU8\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "wxBtwCZtDAg"
    },
    "snippet": {
     "publishedAt": "2018-11-21T01:00:11.000Z",
     "channelId": "UCZFhj_r-MjoPCFVUo3E1ZRg",
     "title": "13-Year-Old FEARLESS Surfing Prodigy",
     "description": "NEW No Days Off gear: https://whistle.video/NoDaysOffMerch 13-Year-Old Kai Williams was born to surf. Nobody works harder at their craft! COMMENT with ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/wxBtwCZtDAg/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/wxBtwCZtDAg/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/wxBtwCZtDAg/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Whistle",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/vjFm5CKV6hnkvfnwTAcJoWTYsKs\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "wmrHPUuQT5k"
    },
    "snippet": {
     "publishedAt": "2020-04-02T19:00:17.000Z",
     "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
     "title": "THE SECRETS OF SURFING PIPELINE (JAMIE O&#39;BRIEN)",
     "description": "INSIGHT AND KNOWLEDGE OF THE SECRETS OF SURFING PIPELINE FROM JAMIE O'BRIEN CHECK OUT MY MERCH: HTTP://WWW.JAMIEOBRIENSHOP.",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/wmrHPUuQT5k/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/wmrHPUuQT5k/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/wmrHPUuQT5k/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Jamie O'Brien",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/A8m_YPujHB81RmbjdoOq376_LzM\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "9yE59aWM7Z0"
    },
    "snippet": {
     "publishedAt": "2020-04-15T18:00:09.000Z",
     "channelId": "UC_F4Iy5korq2mEWZDQhG07w",
     "title": "SURFING CRAZY SANDBARS WITH KELLY SLATER AND JOHN JOHN! || LEARNING HOW TO FISH!",
     "description": "This video was shot before the lockdown caused by COVID-19. in this episode we convinced our filmers to go surfing and we filmed! also i try catching some fish ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/9yE59aWM7Z0/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/9yE59aWM7Z0/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/9yE59aWM7Z0/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Koa Rothman",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/tyLW3WKx8upgrcg8PF10qLEY1zs\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "jyn_orqdyHQ"
    },
    "snippet": {
     "publishedAt": "2017-11-16T16:00:26.000Z",
     "channelId": "UCsooa4yRKGN_zEE8iknghZA",
     "title": "The complicated history of surfing - Scott Laderman",
     "description": "Check out our Patreon page: https://www.patreon.com/teded View full lesson: https://ed.ted.com/lessons/the-complicated-history-of-surfing-scott-laderman Today ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/jyn_orqdyHQ/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/jyn_orqdyHQ/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/jyn_orqdyHQ/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "TED-Ed",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/fs0sKRouRIoMLNhr15rg_PUcoxs\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "TRCtJNhhMhw"
    },
    "snippet": {
     "publishedAt": "2019-08-16T19:48:12.000Z",
     "channelId": "UC0uzP4XsyVMGr7NwBUYv4mA",
     "title": "A Day in the Life | surfing twice and designing a custom wetsuit",
     "description": "Hey everyone! Here's a day in the life vlog where I surf in Orange County, California and design a rad custom wetsuit by JONESEA. Check it out here: ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/TRCtJNhhMhw/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/TRCtJNhhMhw/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/TRCtJNhhMhw/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Eryn Krouse",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/S9cuXZkIvXoU_nwLKL9D3qGjIj4\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "26KzUnEbTUs"
    },
    "snippet": {
     "publishedAt": "2013-05-17T22:23:40.000Z",
     "channelId": "UCblfuW_4rakIf2h6aqANefA",
     "title": "Surfing the Heaviest Wave in the World - Teahupoo",
     "description": "Get barreled http://win.gs/1alYVe2 May 13th, 2013 will go down as a memorable day in the Tahitian history books. Watch as Tahitian demi-god Raimana Van ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/26KzUnEbTUs/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/26KzUnEbTUs/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/26KzUnEbTUs/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Red Bull",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/SQ5XjyY0edt05_ldMs1AcD2N5x4\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "29dL2hztP8A"
    },
    "snippet": {
     "publishedAt": "2020-04-11T19:00:00.000Z",
     "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
     "title": "STORM DRAIN SURFING",
     "description": "THIS EPISODE WAS FILMED PREVIOUSLY. GIVEN THE CURRENT AND EVOLVING SITUATION OF COVID-19 PLEASE CONTINUE TO PRACTICE SOCIAL ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/29dL2hztP8A/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/29dL2hztP8A/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/29dL2hztP8A/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Jamie O'Brien",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/7_1rWE1YDbZxwGlY5tl7UwjPFuY\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "FA40RI7x000"
    },
    "snippet": {
     "publishedAt": "2019-01-14T18:25:20.000Z",
     "channelId": "UCW8zgx5JhvFPmIZh7NI-jrA",
     "title": "Surfers caught inside massive waves - HOLD YOUR BREATH 2",
     "description": "When you see the mountain coming in the horizon, whats your first thought?",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/FA40RI7x000/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/FA40RI7x000/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/FA40RI7x000/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "SuRf, GaMe & Action",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/hHModLrc5VjasTHh-wXhOwGCJ5Q\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "TT3s95pQK7w"
    },
    "snippet": {
     "publishedAt": "2020-04-26T17:00:12.000Z",
     "channelId": "UCkbTTGoBpjX8ogXHCt-aegw",
     "title": "I learned to surf in 14 days in El Salvador",
     "description": "TAKE ADVANCED SELFIES LIKE ME (40% off w/ code AWAKEN): https://bit.ly/2BJ4V4B GROW YOUR INSTAGRAM LIKE ME (40% off w/ code AWAKEN): ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/TT3s95pQK7w/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/TT3s95pQK7w/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/TT3s95pQK7w/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Sorelle Amore",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/ip7DZaNpm-ozFu9qmCSyDfTY3VM\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "NHgNwCB2020"
    },
    "snippet": {
     "publishedAt": "2017-05-08T04:50:49.000Z",
     "channelId": "UCoAzdKjwN3W4PFUmtv_MGKQ",
     "title": "KALOEA Surfer Girls - Destination Mentawai WavePark (4K - Drone)",
     "description": "Follow the KALOEA Girls on their surfing adventure to WavePark Mentawai Islands, Indonesia where they lived by the motto EAT, SURF, SLEEP, REPEAT....",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/NHgNwCB2020/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/NHgNwCB2020/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/NHgNwCB2020/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "KALOEA Surf Bikinis",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/zaiyqHbBJdyoBqfoY2zz481clSU\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "67QNw2xQlsk"
    },
    "snippet": {
     "publishedAt": "2019-01-12T14:00:15.000Z",
     "channelId": "UCuZSTHZf3vd7eVehhnotcsg",
     "title": "Learn How To Surf In 10 Minutes",
     "description": "This video is for anyone who wants to learn how to surf! From choosing your equipment, all the way to a step by step guide to standing up. We show you it all.",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/67QNw2xQlsk/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/67QNw2xQlsk/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/67QNw2xQlsk/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "How to Rip",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/wfwhWGYsHfq_0CKXxYsmHmvVK6M\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "6GUtd7f1_Xo"
    },
    "snippet": {
     "publishedAt": "2019-01-01T20:01:55.000Z",
     "channelId": "UCVk7uRN7g-q_uHMaAjHxk8A",
     "title": "THE GIRLS OF SURFING XIX",
     "description": "The Girls of Surfing 2018 edition Join the page here : https://www.facebook.com/thegirlsofsurfing/ Instagram @jolieoligny Twitter @jolieoligny Inspired by ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/6GUtd7f1_Xo/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/6GUtd7f1_Xo/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/6GUtd7f1_Xo/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "thegirlsofsurfing",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/2QLpgSediERn5_S_XqS_hK1xlgw\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "cgWoXkVFA4U"
    },
    "snippet": {
     "publishedAt": "2018-09-30T18:27:52.000Z",
     "channelId": "UCf5CA0OsvhhU-6AcSjT1oKQ",
     "title": "PROS Surfing Glassy PERFECTION at TEXAS Wavepool",
     "description": "The day after the Stab High surf contest had ended at BSR wave pool in Waco Texas, Kalani Robb woke up super early to score the first couple waves when ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/cgWoXkVFA4U/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/cgWoXkVFA4U/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/cgWoXkVFA4U/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "BEEFS T.V.",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/Y5PFmyzA0s9UXLDwLVRHeeoGCcY\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "JJJtW8tQvB0"
    },
    "snippet": {
     "publishedAt": "2019-10-20T05:18:41.000Z",
     "channelId": "UCq650FWunrqAhM6pV5sncCg",
     "title": "FINGER SURFING!",
     "description": "I'v been getting comments to make a Finger Surfboard ever since I started making Fingerboard videos but I always thought it would be way to hard... well, I made ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/JJJtW8tQvB0/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/JJJtW8tQvB0/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/JJJtW8tQvB0/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "davidsjones",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/TBggU0XTi2ritfLM5-vqwpx8Hp0\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "Lm3P8rb428M"
    },
    "snippet": {
     "publishedAt": "2017-10-21T05:57:41.000Z",
     "channelId": "UCYLqIgYnlbmZHH9_oacn5Ng",
     "title": "SURFING WITH kid surfer SABRE NORRIS &amp; The Norris nuts! || Georgia Productions",
     "description": "FIRST OF ALL THANK YOU SO MUCH FOR 100K! So sabre and her siblings Sockie, Biggy and Naz tried to teach me how to surf. I't didn't go well. WATCH THE ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/Lm3P8rb428M/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/Lm3P8rb428M/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/Lm3P8rb428M/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Georgia Productions",
     "liveBroadcastContent": "none"
    }
   }
  ]
 };