export default function CardNinja(ninja){
    return(
        <div>
            <p>{ninja.nome}</p>
            <p>{ninja.rank}</p>
            <p>{ninja.jutsu}</p>
            <p>{ninja.aldeiaNatal}</p>
        </div>
    )
}