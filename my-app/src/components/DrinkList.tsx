// 음료리스트 컴포넌트 정의
const DrinkList = ({drinks} : {drinks : string[]}) => {

    return (
        <div>
            <h3>음료수 리스트</h3>
            <ul>
                {drinks.map((drink, index)=>(
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList;