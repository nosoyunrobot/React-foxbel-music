import React, { Component } from 'react';
import * as actions from "./action/index";
import Header from './widgets/header';
import '../components/DetalleAlbums.css';
import Footer from '../components/footer/footer'

class DetalleAlbum extends Component{
    state = {
        album : '',
        tracks : []
    }
    componentDidMount(){
       actions.getAlbum(this.props.match.params.id).then(album => {
           this.setState({
               album,
               tracks : album.tracks.data
           })
       })
    }
    //traere las pistas del album
    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ?
            tracks.map((track, index) => (
                <figure key={index} className="figure">
                    <figcaption className="figure-caption text-xs-right">{track.title}</figcaption>
                    <audio controls src={track.preview}>
                        <code></code>
                    </audio>
                </figure>
            ))
        :null;
    }
    renderAlbum(){ 
        const {album} = this.state;
        return (
                <div className="card-mb-3">
                    <img src={album.cover_big}/>
                    <div className="card-body">
                        <p className="titulo">{album.title}</p>
                        <p className="release">{album.release_date}</p>
                    </div>
                </div>
                

        )
    }

    render(){
        console.log(this.state)
        return(
            <div className="row">
                <div className="col-md-4 navegacion">
                        <Header/>
                </div>
                <div className="col-md-8">
                    <div className="col-md-12">                          
                        <div className="row listAlbums mt-4">
                                <h4>Canciones</h4>
                            <div className="row">
                                <div className="col-md-6 text-center mt-4 pt-5">
                                        {this.renderAlbum()}
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div id="scroll" className="text-center">
                                            {this.renderTracks()}
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                        <Footer/>
                </div>
            </div>

        )
    }
}
export default DetalleAlbum;