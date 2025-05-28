
function CategoryCard() {
    return (
        <div className="relative rounded-lg overflow-hidden">
            <img
                src="/categoria1.png"
                alt="Wing Chair"
                className="w-full h-[424px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black opacity-70 text-white p-5">
                <h3 className="text-xl font-semibold mb-2">Wing Chair</h3>
                <p className="text-sm text-gray-300">3,584 Products</p>
            </div>
        </div>
    )
}

export default CategoryCard
