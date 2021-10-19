import React from "react";
import { connect } from 'react-redux';

const Suplentes = ({suplentes, quitarSuplente, cambiarAtitular }) => (
    
    <section>
        <h2>Suplente</h2>
        <div className="banco">
            {
                suplentes.map(
                    jugador => (
                        <article className="suplente" key={jugador.id}>
                            <div>
                                <img width="120" src={"https://image.tmdb.org/t/p/w300" + jugador.poster_path} alt={jugador.nombre} />
                                <button onClick={ () => quitarSuplente(jugador)}>X</button>
                                <button onClick={ () => (cambiarAtitular(jugador))}>cambiar a titular</button>
                            </div>
                            <p>{jugador.nombre}</p>
                        </article>
                    )
                )
            }
        </div>
    </section>
    
    
)

const mapStateToProps = state => ({
    suplentes: state.suplentes,
});

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    },
    cambiarAtitular(jugador) {
        dispatch({
            type: "CAMBIAR_A_TITULARES",
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (Suplentes)