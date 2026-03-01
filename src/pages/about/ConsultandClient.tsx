import { fallbackFoundation } from "../../data/fallback";

const foundation = fallbackFoundation

const Clients = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-primary text-2xl md:text-3xl font-black leading-tight mb-8 tracking-tight">
                Our Clients
            </h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-10">
                {foundation.brands.map((brands) => (<p className="text-slate-500 text-sm leading-relaxed">{brands}</p>))}
            </div>
        </div>
    )
}

const ConsultUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-primary text-2xl md:text-3xl font-black leading-tight mb-8 tracking-tight">
                Consult Us
            </h1>

        </div>
    )
}

const ConsultandClient = () => {
    return (
        <div className="max-w-7xl bg-white py-10 mx-auto space-y-10 mb-10 px-4 sm:px-6 lg:px-8">
            <Clients />
            <ConsultUs />
        </div>
    )
}

export default ConsultandClient