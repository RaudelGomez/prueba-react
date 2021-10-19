import React from "react";
import { connect } from 'react-redux';

const Titulares = ({titulares, quitarTitulares, cambiarAsuplentes}) => (
    
    <section>
        <h2>Titular</h2>
        <div className="cancha">
            {
                titulares.map(
                    jugador => (
                        <article className="titular" key={jugador.id}>
                            <div>
                                <img width= "120" src={"https://image.tmdb.org/t/p/w300" + jugador.poster_path} alt={jugador.nombre} />
                                <button onClick={ () => (quitarTitulares(jugador) ) }>X</button>
                                <button onClick={ () => (cambiarAsuplentes(jugador))}>cambiar a suplentes</button>
                            </div>
                            <p><strong>{jugador.nombre}</strong></p>
                        </article>
                    )
                )
            }
        </div>
    </section>
    
    
)

const mapStateToProps = state => ({
    titulares: state.titulares,
});

const mapDispatchToProps = dispatch => ({
    quitarTitulares(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    },
    cambiarAsuplentes(jugador) {
        dispatch({
            type: "CAMBIAR_A_SUPLENTES",
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (Titulares)