import { DeliveryTruckIcon, DiscountPromoIcon, MoneyCashIcon, QualityCertificateIcon } from "@/assets"


function AdvantagesSection() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-9 p-4 mb-4 mt-5 bg-card rounded-lg">
            <div className="flex items-end gap-x-4">
                <MoneyCashIcon />
                <div>
                    <span className="font-medium text-xs sm:text-sm tracking-tight line-clamp-2 capitalize">Pago seguro y fácil</span>
                    <p className="text-xs/relaxed font-light text-caption -tracking-[0.32px] pb-6 hidden sm:block">Compra tus zapatillas con pago rápido y seguro </p>
                </div>
            </div>

            <div className="flex items-end gap-x-4">
                <DiscountPromoIcon />
                <div>
                    <span className="font-medium  text-xs sm:text-sm tracking-tight line-clamp-2 capitalize">Novedades y ofertas</span>
                    <p className="text-xs/relaxed font-light text-caption -tracking-[0.32px] pb-6 hidden sm:block">Últimas zapatillas y ofertas exclusivas para ti.</p>
                </div>
            </div>

            <div className="flex items-end gap-x-4">
                <QualityCertificateIcon />
                <div>
                    <span className="font-medium text-xs sm:text-sm tracking-tight line-clamp-2 capitalize">Garantía de calidad</span>
                    <p className="text-xs/relaxed font-light text-caption -tracking-[0.32px] pb-6 hidden sm:block">Zapatillas de calidad garantizada en cada par.</p>
                </div>
            </div>

            <div className="flex items-end gap-x-4">
                <DeliveryTruckIcon />
                <div>
                    <span className="font-medium text-xs sm:text-sm tracking-tight line-clamp-2 capitalize">Entrega confiable</span>
                    <p className="text-xs/relaxed font-light text-caption -tracking-[0.32px] pb-6 hidden sm:block">Recibe tus zapatillas rápido y sin complicaciones.</p>
                </div>
            </div>
        </div>
    )
}

export default AdvantagesSection
