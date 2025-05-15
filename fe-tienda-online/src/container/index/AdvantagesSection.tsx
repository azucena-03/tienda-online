import { CircleHelp, HandHelping, Package, Truck } from "lucide-react"

function AdvantagesSection() {
    return (
        <div className="flex justify-between px-[70px] py-12 rounded-md shadow-sm mb-8 bg-white">
            <div className="flex items-center gap-x-4">
                <Package size={46} absoluteStrokeWidth={true} strokeWidth={1} />
                <div>
                    <span className="font-medium">Lorem, ipsum</span>
                    <p className="text-xs text-[#9A9CAA]">Lorem ipsum dolor sit</p>
                </div>
            </div>

            <div className="flex items-center gap-x-4">
                <Truck size={46} absoluteStrokeWidth={true} strokeWidth={1} />
                <div>
                    <span className="font-medium">Lorem, ipsum</span>
                    <p className="text-xs text-[#9A9CAA]">Lorem ipsum dolor sit</p>
                </div>
            </div>

            <div className="flex items-center gap-x-4">
                <HandHelping size={46} absoluteStrokeWidth={true} strokeWidth={1} />
                <div>
                    <span className="font-medium">Lorem, ipsum</span>
                    <p className="text-xs text-[#9A9CAA]">Lorem ipsum dolor sit</p>
                </div>
            </div>

            <div className="flex items-center gap-x-4">
                <CircleHelp size={46} absoluteStrokeWidth={true} strokeWidth={1} />
                <div>
                    <span className="font-medium">Lorem, ipsum</span>
                    <p className="text-xs text-[#9A9CAA]">Lorem ipsum dolor sit</p>
                </div>
            </div>
        </div>
    )
}

export default AdvantagesSection
