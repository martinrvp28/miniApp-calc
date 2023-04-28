import './Options.css';
import {Link} from 'react-router-dom';



const Options = () => {

return (
    <div className="buttonContainer">

        <Link to='/PercentCalc'><button>CALCULAR PORCENTAJE AGREGADO</button></Link>
        <Link to='/PercentCalc'><button>PASAR A DOLARES</button></Link>
        <Link to='/PercentCalc'><button>PASAR A PESOS URUGUAYOS</button></Link>

    </div>
)

}


export default Options;