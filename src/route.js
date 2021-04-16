import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home';
import DetalleAlbum from './components/DetalleAlbums';
import FavoritosAlbum from './components/FavoritosAlbum';

const Routes = () => {
    return(
        //Rutas
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detalle/:id" exact component={DetalleAlbum}/>
            <Route path="/Favoritos" exact component={FavoritosAlbum}/>
        </Switch>
    )
}
export default Routes;

