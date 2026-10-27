import { useState } from "react";
import DrinkList from "./DrinkList";

const Drink = () => {

    const [drinks, setDrinks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    // 입력값 변경 핸들러
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    // 음료 추가 함수 - 버튼클릭 시 배열에 음료가 저장
    const addDrink = () => {
        if(!inputValue.trim()){
            alert("음료를 입력하세요");
            return;
        }
        setDrinks([...drinks, inputValue]);
        setInputValue(""); // 입력값 초기화
    }

    return (
        <div>
            <h2>음료수 추가</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="음료를 입력하세요"
            />
            <button onClick={addDrink}>음료 추가</button>

            <DrinkList drinks={drinks} />
            {/* <p>음료수 : {inputValue}</p> */}

            {/* 음료 리스트 출력 */}
            {/* <p>음료 리스트 : {drinks}</p> */}
            {/* <ul>
                {drinks.map((drink, index)=>(
                    <li key={index}>{drink}</li>
                ))}
            </ul> */}

        </div>
    )
}

export default Drink;