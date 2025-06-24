import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

type SectionHeaderProps = {
    title: string,
    icon: string,
}

function SectionHeader({ title, icon }: SectionHeaderProps) {
    return (
        <div className="flex justify-between items-center p-subtitle">
            <h2 className="text-lg tracking-tight font-medium uppercase">
                {`${icon} ${title} ${icon}`}
            </h2>
            <Link to="/productos">
                <Button variant={"outline"} className="font-bold tracking-tight capitalize space-x-1.5 group">
                    <span>ver más</span>
                    <MoveRight className="transition duration-400 ease-in-out group-hover:translate-x-2" />
                </Button>
            </Link>
        </div>

    )
}

export default SectionHeader
