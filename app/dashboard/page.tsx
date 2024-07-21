import { Card } from "../ui/dashboard/cards"

export default function Page(){

    return(
        <main>
            <h1 className="md:text-2x1">
                Dashboard
            </h1>
            <div className="grid lg:grid-cols-3 gap-6 p-9">
                <Card title="Money Things" link="/finance"/>
                <Card title="Food Things" link="/food"/>
                <Card title="Other Things" link="/other"/>
            </div>
        </main>
    )
}