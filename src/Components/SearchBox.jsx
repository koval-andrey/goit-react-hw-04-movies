import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';


export default class Searchbox extends Component {
    state = {
        value: '',
    }

    handleNameChange = event => {
        this.setState({
            value: event.currentTarget.value.toLowerCase()
        });
    }

    hanleSubmit = event => {
        event.preventDefault();

        if (this.state.value.trim() === '') {
           return toast.warning('Поле пошуку пусте!');  
        }

        this.props.onSubmit(this.state.value);

        this.setState({value: '' });
    }

    render(){
    return (
            <form className="SearchForm" onSubmit={this.hanleSubmit}> 
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
    )
    }; 
}

Searchbox.propTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func,
}