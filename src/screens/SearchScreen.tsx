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
import Spinner from '../components/Spinner';

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

export class SearchScreen extends React.Component<Props, OwnState> {
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

  handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.searchVideos()
    }
  }

  searchVideos = () => {
    this.props.searchVideos(this.state.searchTerm);
  }

  getContent() {
    let content;
    if (this.props.isLoading) {
      content = <div className='search-screen-info'><Spinner></Spinner></div>
    } else if (this.props.isError) {
      content = <div className='search-screen-info'>An error occurred. Please try again later.</div>
    } else if (this.props.searchTerm) {
      if (this.props.results.length === 0) {
        content = <div className='search-screen-info'>No results</div>
      } else {
        content = <Paginator items={this.props.results} itemsPerPage={10} component={VideoSearchResult}></Paginator>
      }
    } else {
      content = <div className='search-screen-info'>Start by typing something in the input above!</div>
    }
    return content;
  }

  render() {

    const content = this.getContent();
    return (
      <div className='search-screen'>
        <AppBar styles={{ justifyContent: 'center' }}>
          <input
            type='text'
            className='search-input'
            value={this.state.searchTerm}
            placeholder='收尋...'
            onChange={this.handleSearchTermChanged}
            onKeyPress={this.handleKeyPressed}
          >
          </input>
          <div className='icon-container'>
            <IoIosSearch size='32' color='#fff' className='search-icon' onClick={this.searchVideos} />
          </div>
        </AppBar>
        <div className='search-results'>
          {content}
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state: State): StateProps {
  const searchState = state.search;

  return {
    searchTerm: searchState.searchTerm,
    results: searchState.searchResults[searchState.searchTerm] || [],
    isError: searchState.isError,
    isLoading: searchState.isLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    searchVideos: (searchTerm: string) => {
      dispatch(searchActions.updateSearchTerm(searchTerm));
      dispatch(searchActions.doSearch());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchScreen);
