
/*
import React, { Component } from 'react';

class ButtonLoader extends Component {
    state = {
        loading: false
    }

    fetchData = () => {
        this.setState({ loading : true });

        setTimeout(() => {
            this.setState({ loading : false});
        }, 2000);
    }

    render() {
        const {loading} = this.state;
        return (
            <button className='button' type='submit' onClick={this.fetchData} disabled={loading}>
                { loading && <i className='fa fa-refresh fa-spin'></i> }
                { loading && <span> Searching... </span> }
                { !loading && <span> Search </span> }
            </button>
        );
    }
}

export default ButtonLoader;
*/