export const Total = ({ form, setForm }) => {
    const average = () => {
                const positive = form
            .filter(item => item.valueType === "Entrada")
            .reduce((currentValue, item) => {
                return currentValue + Number(item.value);
            }, 0);

        const negative = form
            .filter(item => item.valueType !== "Entrada")  
            .reduce((currentValue, item) => {
                return currentValue + Number(item.value);
            }, 0);

        return positive - negative;
    };

    return (
        <section className="total">
            <div className="totalValue">
                <h3 className="title3">Valor total:</h3>
                <h3 className="title3 fontPrimary"> {average() !== 0 ? `R$ ${average()},00` : "Carregando..."}
                </h3>
            </div>

            <h4 className="title4 fontGrey" id="totalValue">O valor se refere ao saldo</h4>
        </section>
    )
}