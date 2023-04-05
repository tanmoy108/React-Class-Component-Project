import { Component } from "react";
import './SearchField.css';
class SearchField extends Component {
  render() {
    return (
      <>
        <input
          type="search"
          placeholder={this.props.placeHolderProps}
          className={`search-box ${this.props.classNameProps}`}
          onChange={this.props.onChangeHandlerProps}
        />
      </>
    );
  }
}

export default SearchField;
