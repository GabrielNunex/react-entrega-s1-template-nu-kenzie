import { useState } from "react";
import { FinanceForm } from "../components/financeForm";
import { FinanceList } from "../components/financeList";
import { Header } from "../components/header";
import { Total } from "../components/total";

export const HomePage = () => {
    const [form, setForm] = useState([]);
    const [Text, setText] = useState("");
    const [value, setValue] = useState("");
    const [valueType, setValueType] = useState("Entrada");

    const addForm = () => {
        if (Text === "" || value === "") {
            alert("Preencha todos os campos");
        } else {
            const dataForm = [...form, { descrition: Text, value: value, valueType: valueType }];
            setForm(dataForm);
        }
    };

    return (
        <>
            <Header />
            <div className="listItens">
                <div className="listEnteries">
                    <FinanceForm form={form} setForm={setForm} Text={Text} setText={setText} value={value} setValue={setValue} valueType={valueType} setValueType={setValueType} addForm={addForm} />
                    <Total form={form}/>
                </div>
                <FinanceList form={form} setForm={setForm}/>
            </div>

        </>
    )
}