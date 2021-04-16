import React, { Component } from 'react';
import Header from './widgets/header';
import * as actions from '../components/action/index'
import '../components/home.css'
import Search from '../components/searchBar/searchBar';
import {Link} from 'react-router-dom';
import swal from 'sweetalert'
import Footer from '../components/footer/footer';
class Home extends Component{

    state = {
        albums: []
    }
    componentDidMount(){
        actions.getAlbums().then(item =>this.setState({
            albums : item
        }));
    }
    //Filtro artista, y nombre de canción
    searchAlbums = (term) => {
        actions.getAlbums(term).then(item =>this.setState({
            albums : item
        }));
    }
    //Guardaremos en localstorage nuestro albumfavorito
    addFavorites = (album) => {
        let oldFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    //
        if(this.checkAlbum(oldFavoritos,album)){
            swal({
                title : 'Ya existe el album!',
                text : 'Esto ya está en tus favoritos',
                icon : 'warning'
            })
            return false;
        }

        oldFavoritos.push(album);
        let favoritos = oldFavoritos;
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        swal({
            title : 'Album agregado!',
            text : 'Se agregó a la lista de tus favoritos',
            icon : 'success'
        })
    }
    checkAlbum = (albums,album) => {
        let found = albums.some(function(item){
            return item.album.id === album.album.id;
        });
        return found;
    }

    //metodo para el resultado
    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ? 
        albums.map((item, index) => (
            <div key={index} className="col-md-2 mb-2">
                <div className="card border-white">
                        <a onClick={()=>this.addFavorites(item)} href="#"><a href="#"><i className="far fa-heart text-danger" ></i></a></a>
                        <Link to={`/detalle/${item.album.id}`} className="link"><a href="#"><img src={item.album.cover_big} alt="" className="card-img-top"/></a></Link>
                    <div className="card-body">               
                        <div className="card-title font-monospace">{item.title}</div>
                        <span className="artist">{item.artist.name}</span>
                    </div>
                </div>
            </div>
        ))
        : null
    }

    render(){
        console.log(this.state);
        return(
            <div className="row">
                <div className="col-md-4 navegacion">
                    <Header/>
                </div>
                <div className="col-md-8">
                    <div className="col-md-12">                          
                            <Search searchAlbums={this.searchAlbums}/>
                            <h4>Albums - Busquedas relacionadas</h4>
                       <div className="row listAlbums" id="scrollalbums">
                                {this.renderAlbums()}   
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
export default Home;