import React from 'react';
import { connect } from 'react-redux';

function Jugadores({jugadores, agregarTitulares, agregarSuplentes}) {
    return(
    <section>
        <h2>Jugadores</h2>
        <div className="container_jugadores">
            {
                jugadores.map( j => (
                    <article className="jugador" key={j.id}>
                        <div className="imagen">
                        <img width ="80" height="auto" src={"https://image.tmdb.org/t/p/w300" + j.poster_path} alt={j.nombre} />
                        </div>
                        <h3 className="letras">{j.nombre}</h3>
                        <div className="botones">
                            <button onClick={ () => ( agregarTitulares(j) ) }>agregar a titulares</button>
                            <button onClick={ () => ( agregarSuplentes(j))}>agreagar a suplentes</button>
                        </div>
                    </article>
                    )   
                )
            }
        </div>
    </section> 
    ) 
}

const mapStateToProps = state => ({
    jugadores: state.jugadores,
});

const mapDispatchToProps = dispatch => ({
    agregarTitulares(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
     },
    agregarSuplentes(jugador) {
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps) (Jugadores)