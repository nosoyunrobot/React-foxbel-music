import React, { Component } from 'react';
import Header from './widgets/header';
import * as actions from '../components/action/index'
import '../components/home.css'
import '../components/FavoritoAlbum.css'
import {Link} from 'react-router-dom';
import Footer from '../components/footer/footer'

class FavoritosAlbum extends Component{

    state = {
        albums: []
    }
    //Mostraremos el listado de nuestros albums favoritos en una ruta
    componentDidMount(){
        let favoritos = actions.getFavoritesAlbum();
        this.setState({
            albums : JSON.parse(favoritos)
        })
    }

    //metodo para el resultado
    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ? 
        albums.map((item, index) => (
            <div key={index} className="col-md-3 mb-2">
                <div className="card border-white mt-2">
                        {/* <a onClick={()=>this.addFavorites(item)} href="#"><a href="#"><i className="fas fa-plus text-danger" ></i></a></a> */}
                        <Link to={`/detalle/${item.album.id}`} className="link"><a href="#"><img src={item.album.cover_big} alt="" className="card-img-top"/></a></Link>
                    <div className="card-body">               
                        <div className="card-title font-monospace">{item.title}</div>
                        <span className="artist">{item.artist.name}</span>
                    </div>
                    {/* <div className="card-footer">
                        <div className="links">
                            <Link to={`/detalle/${item.album.id}`} className="link"><a href="#"><i className="far fa-eye text-danger"></i></a></Link>
                            <a href="#"><a href="#"><i className="fas fa-star text-gray"></i></a></a>
                        </div>
                    </div>  */}
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
                <div className="col-md-8 mt-5">
                    <div className="col-md-12">   
                        <h4>Favoritos</h4>                       
                       <div className="row scrollfavorite">
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
export default FavoritosAlbum;