import { connect } from "react-redux";



const Reloj = ({hora, segundo, cambiate}) => {


    return (
    <main>
        <h1>Reloj</h1>
        <section>
            <h2>La hora es {hora} : {segundo} </h2>
            <button onClick={ (hora) => (cambiate())}>cambia</button>
           
        </section>
    </main>
    )
};

const mapStateToProps = state => ({
    
   hora: state.hora,
   segundo: state.segundo

});

const mapDispatchToProps = dispatch => ({
    cambiate() {
        dispatch({
            type: "CAMBIATE"
        })
    }
});



export default connect(mapStateToProps, mapDispatchToProps) (Reloj)

