export default function ListaNinjas({ ninjas }) {
    return (
        <div>
            <ul>
                {ninjas.map((ninja) => (
                    <li key={ninja.id}>
                        {ninja.nome} - {ninja.rank} - {ninja.jutsu} -{ninja.aldeiaNatal} 
                    </li>
                ))}
            </ul>
        </div>
    )
}