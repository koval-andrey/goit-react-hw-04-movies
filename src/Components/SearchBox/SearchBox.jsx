import { toast } from "react-toastify";
import { Component } from "react";

export default class Searchbox extends Component {
  state = {
    value: "",
  };

  handleNameChange = (event) => {
    this.setState({
      value: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim() === "") {
      return toast.warning("search string is empty");
    }

    this.props.onSubmit(this.state.value);

    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          placeholder="Search movie"
          onChange={this.handleNameChange}
        />
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>
    );
  }
}
