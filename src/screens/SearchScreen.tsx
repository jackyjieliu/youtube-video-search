import * as React from 'react';
import { connect } from 'react-redux';
import './SearchScreen.css';
import AppBar from '../components/AppBar';
import { IoIosSearch } from 'react-icons/io';
import * as searchActions from '../store/search/searchActions';
import Paginator from '../components/Paginator';
import VideoSearchResult from '../components/VideoSearchResult';
import { YoutubeResult } from '../store/search/searchEffects';
import { State } from '../store/store';

interface StateProps {
  searchTerm: string;
  results: Array<YoutubeResult>;
  isError: boolean;
  isLoading: boolean;
}

interface DispatchProps{
  searchVideos: (searchTerm: string) => void;
}

type Props = StateProps & DispatchProps
interface OwnState {
  searchTerm: string
}

class SearchScreen extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchTermChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handlekeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.searchVideos()
    }
  }

  searchVideos = () => {
    this.props.searchVideos(this.state.searchTerm);
  }

  render() {
    console.log(JSON.stringify(this.props.results));


    let content;

    if (this.props.isLoading) {
      content = <div>Loading...</div>
    } else if (this.props.isError) {
      content = <div>Error</div>
    } else if (this.props.searchTerm) {
      if (this.props.results.length === 0) {
        content = <div>No results</div>
      } else {
        content = this.props.results.map((r) => {
          return <VideoSearchResult result={r} key={r.id.videoId}></VideoSearchResult>
        });
      }
    }


    return (
      <div className='search-screen'>
        <AppBar styles={{ justifyContent: 'center' }}>
          <input
            type='text'
            className='search-input'
            value={this.state.searchTerm}
            placeholder='收尋...'
            onChange={this.handleSearchTermChanged}
            onKeyPress={this.handlekeyPressed}
          >
          </input>
          <div className='icon-container'>
            <IoIosSearch size='32' color='#fff' onClick={this.searchVideos} />
          </div>
        </AppBar>
        <div className='search-results'>
          {content}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: State): StateProps {
  const searchState = state.search;

  return {
    searchTerm: searchState.searchTerm,
    results: searchState.searchResults[searchState.searchTerm] || [],
    isError: searchState.isError,
    isLoading: searchState.isLoading,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    searchVideos: (searchTerm: string) => {
      dispatch(searchActions.updateSearchTerm(searchTerm));
      dispatch(searchActions.doSearch());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchScreen);
