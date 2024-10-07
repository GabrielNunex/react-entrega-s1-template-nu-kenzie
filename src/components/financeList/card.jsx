export const Card = ({ form, setForm }) => {
    const removeItem = (entrada) => {
        const updatedForm = form.filter( (_, index) => index !== entrada)
        setForm(updatedForm);
    }

    return (
        <div className="financeList">
            {form.length < 1 ? (<h2 className="title2">Você ainda não possui nenhum lançamento</h2>) :
                (form.map((item, index) => (
                    <div className={item.valueType === "Entrada" ? "financeItem-in" : "financeItem-out"} key={index}>
                        <div className="financeText">
                            <h3 className="title3">{item.descrition}</h3>
                            <p className="bodyText fontGrey" id="financeType">{item.valueType}</p>
                        </div>

                        <div className="financeValue">
                            <p className="bodyText">R$ {item.value},00</p>
                            <button type="submit" className="financeBtn" onClick={() => removeItem(index)}>Excluir</button>
                        </div>
                    </div>))
                )}
        </div>
    )
}