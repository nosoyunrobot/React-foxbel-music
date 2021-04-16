import React, { Component } from 'react';
import '../searchBar/searchBar.css'

class Search extends Component{

    state = {
        term : ""
    }
    /**campos de entrada HandlesInputsChange */
    handleInputChange = (event) => {
        this.setState({term : event.target.value})
    }
    submitSearch = (event) => {
        event.preventDefault();
        let {term} = this.state;
        this.props.searchAlbums(term);
    }
    
    render(){
        console.log(this.state)
        return(
            <div className="search mb-4 mt-3">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Buscar" className="form-control"
                                value={this.state.term}
                                onChange={(event) => this.handleInputChange(event)}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <button className="btn btn-gray"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                        {/* <div className="col-md-2">
                            <div className="form-group">
                                <p className="fs-6"><i className="fas fa-user text-danger"></i>Francisco M.</p>
                            </div>
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }
}
export default Search;