
function CompanySection() {
    return (
        <div className="hidden md:flex justify-between">
            {Array.from({ length: 7 }).map((_, index) => (
                <img key={index} src="/company.png" alt="compañia logo" />
            ))}
        </div>
    )
}

export default CompanySection
