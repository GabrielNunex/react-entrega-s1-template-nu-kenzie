import { Card } from "./card"

export const FinanceList = ({form, setForm}) => {
    return (
        <section className="finance">
            <h3 className="title3">Resumo financeiro</h3>
            <Card form={form} setForm={setForm}/>
        </section>
    )
}