export const FinanceForm = ({ Text, setText, value, setValue, valueType, setValueType, addForm }) => {
    
    const submit = (e) => {
        e.preventDefault();
        addForm();
        setText("");
        setValue("");
        setValueType("Entrada");
    };
    
    return (
        <form className="financeForm" onSubmit={submit}>

            <div className="labelForms">
                <label className="bodyText">Descrição</label>
                <input type="text" name="descrition" value={Text} className="inputs" placeholder="Digite aqui sua descrição" required onChange={(e) => setText(e.target.value)} />
                <p className="fontGrey bodyText">Ex: Compra de roupas</p>
            </div>

            <div className="labelForms">
                <label className="bodyText">Valor (R$)</label>
                <input type="number" name="value" value={value}  className="inputs" placeholder="Digite aqui o valor" required onChange={(e) => setValue(e.target.value)} />
            </div>

            <div className="labelForms">
                <label className="bodyText">Tipo de Valor</label>
                <select name="valueType" className="inputs bodyText" value={valueType} onChange={(e) => setValueType(e.target.value)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
            </div>

            <button type="submit" className="buttonForm fontWhite">Inserir Valor</button>

        </form>
    )
}