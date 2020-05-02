import * as React from 'react';
import './Paginator.css';

interface Props<T> {
  styles?: React.CSSProperties;
  itemsPerPage: number;
  items: Array<T>;
  component: React.ComponentClass<{ item: T }>;
}

interface OwnState {
  currentPage: number;
}

/**
 * Handles pagination logic of a list
 */
export default class Paginator<T extends { id: number | string }> extends React.Component<Props<T>, OwnState> {

  constructor(props: Props<T>) {
    super(props);

    this.state = {
      currentPage: 1,
    }
  }

  /**
   * Navigate to a page
   * @param goToPage page number to go to
   * @returns {Function} call the returned function to go to the page
   */
  goToPageWrapper(goToPage: number) {
    return () => {

      if (this.state.currentPage !== goToPage) {

        this.setState({
          ...this.state,
          currentPage: goToPage,
        });
        window.scrollTo(0, 0);
      }
    }
  }

  /**
   * Get items to display on the page from the full list
   * @param items list of all items
   * @param itemsPerPage items to display
   * @param currentPage current page number
   * @returns {Array<Element>} List of elements to display
   */
  getItemsToDisplay(items: Array<T>, itemsPerPage: number, currentPage: number) {

    const beginIndex = (currentPage - 1) * itemsPerPage;
    return items
      .slice(beginIndex, beginIndex + itemsPerPage)
      .map((item) => {
        return <this.props.component item={item} key={item.id}></this.props.component>
      });;
  }

  /**
   * Get elements for pagination section
   * @param totalItems total number of items
   * @param itemsPerPage number of items per page
   * @param currentPage current page number
   * @returns {Array<Element>} pagination information to display
   */
  getPaginationElements(totalItems: number, itemsPerPage: number, currentPage: number) {

    const pages = Math.ceil(totalItems / itemsPerPage);
    let elements = [];
    for (let i = 0; i < pages; i++) {

      const page = i + 1;
      let className = 'page-number';
      if (page === currentPage) {
        className = className + ' current-page'
      } else {
        className = className + ' cliclable-page-number'
      }

      const element = <div className={className} onClick={this.goToPageWrapper(page)} key={page}>{page}</div>
      elements.push(element);
    }
    return elements;
  }

  render() {

    const items = this.props.items;
    const itemsPerPage = this.props.itemsPerPage;
    const currentPage = this.state.currentPage;

    const itemsElement = this.getItemsToDisplay(items, itemsPerPage, currentPage);
    const paginationElements = this.getPaginationElements(items.length, itemsPerPage, currentPage);

    const styles = this.props.styles || {};
    return (
      <div className='paginator' style={styles}>
        <div className='items'>
          {itemsElement}
        </div>
        <div className='pagination'>
          {paginationElements}
        </div>
      </div>
    );
  }
}
