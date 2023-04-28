import "./PercentCalc.css"
import { useState, useEffect } from "react";


const PercentCalc = () => {

    const [percent, setPercent] = useState(0);
    const [dolar, setDolar] = useState(1);

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState();
    const [productPriceUsd, setProductPriceUsd] = useState();

    const [list, setList] = useState([]);
    const [priceList, setPriceList] = useState([]);
    const [perPrice, setPerPrice] = useState ([]);

    const [priceListUsd, setPriceListUsd] = useState([]);
    const [perPriceUsd, setPerPriceUsd] = useState([]);

    const handlePercentChange = (event) => {
        setPercent(event.target.value);
    }

    const handleNameChange = (event) => {
        setProductName(event.target.value);
    }

    const handlePriceChange = (event) => {
        setProductPrice(event.target.value);
    }

    const handlePriceChangeUsd = (event) => {
        setProductPriceUsd(event.target.value);
    }

    const handleDolarChange = (event) => {

        setDolar(event.target.value);
    }

    const onClickBorrarListado = () => {
        setList([]);
        setPriceList([]);
        setPriceListUsd([]);
        setPerPrice([]);
        setPerPriceUsd([]);

    }

    const onClickAdd = () => {

        if (((productPrice>0) || (productPriceUsd>0)) && (productName !== "")){

            if (!(productPrice > 0 && productPriceUsd > 0)) {

                if (productPrice>0) {
                
                    const newPriceList = [...priceList, productPrice];
                    const newPriceListUsd = [...priceListUsd, (productPrice/dolar)];

                    setPriceList(newPriceList);
                    setPriceListUsd(newPriceListUsd);

                } else {


                    const newPriceList = [...priceList, (productPriceUsd*40)];
                    const newPriceListUsd = [...priceListUsd, productPriceUsd];

                    setPriceList(newPriceList);
                    setPriceListUsd(newPriceListUsd);
                }

                const newList = [...list, productName];
                setList(newList);

            }


        }
    }


    useEffect(() => {
        let newPrices = [];
        let newPricesDolar = []

        for (let i = 0; i < priceList.length; i++) {
            const newPrice = (1 + (percent / 100)) * priceList[i];
            newPrices.push(newPrice);
        }

        for (let i = 0; i < priceListUsd.length; i++) {
            const newPriceUsd = (1 + (percent / 100)) * priceListUsd[i];
            newPricesDolar.push(newPriceUsd);
        }

        setPerPrice(newPrices);
        setPerPriceUsd(newPricesDolar)

    }, [percent, priceList, list]);

    return(

        <div className="percentContainer">

            <div className="containerInputs">

                <div>
                    <h2>INGRESAR EL PORCENTAJE A CALCULAR</h2>

                        <input type="number" id="percent"  value={percent} name="lpercent" onChange={handlePercentChange}/>

                </div>

                <div>
                    <h2>INGRESAR EL VALOR DEL DOLAR</h2>

                        <input type="number" id="dolar"  name="ldolar" onChange={handleDolarChange}/>
                </div>

            </div>
            

            <div className="containerFormProduct">

                <div className="newProduct">

                    
                    <div>
                        <h3>Producto</h3>
                        <input className="productInput" type="string" id="product" name="lproduct" onChange={handleNameChange}/>
                    </div>

                    <div>
                        <h3>Precio $</h3>
                        <input type="number" id="cost" name="lcost" min={1} onChange={handlePriceChange}/>
                    </div>

                    <div>
                        <h3>Precio USD</h3>
                        <input type="number" id="cost" name="lcost" min={1} onChange={handlePriceChangeUsd}/>
                    </div>
                
                </div>
                
                <button onClick={onClickAdd}>AGREGAR</button>
            </div>
    

            <div className="tableContainer">

                <table>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>COSTO $</th>
                        <th>COSTO USD</th>
                        <th>COSTO + %AGREGADO $</th>
                        <th>COSTO + %AGREGADO USD</th>
                    </tr>

                    {list.map((item,index) => (
                        <tr key={index}>

                            <th>{item}</th>
                            <th>{priceList[index]}</th>
                            <th>{priceListUsd[index]}</th>
                            <th>{perPrice[index]}</th>
                            <th>{perPriceUsd[index]}</th>
                        </tr>
                    )
                        
                    )}

                </table>

            </div>

            <button className="borrarButton" onClick={onClickBorrarListado}>BORRAR LISTADO</button>

        </div>
    )




}

export default PercentCalc;