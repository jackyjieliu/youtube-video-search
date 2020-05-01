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

export default class Paginator<T extends { id: number | string}> extends React.Component<Props<T>, OwnState> {

  constructor(props: Props<T>) {
    super(props);

    this.state = {
      currentPage: 1,
    }
  }

  goToPageWrapper(currentPage: number) {
    return () => {
      if (this.state.currentPage !== currentPage) {
        this.setState({
          ...this.state,
          currentPage,
        });
        window.scrollTo(0, 0);
      }
    }
  }

  getItemsToDisplay(items: Array<T>, itemsPerPage: number, currentPage: number) {

    const beginIndex = (currentPage - 1) * itemsPerPage;
    return items
      .slice(beginIndex, beginIndex + itemsPerPage)
      .map((item) => {
        return <this.props.component item={item} key={item.id}></this.props.component>
      });;
  }

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
