import { useState } from "react"
import "./Sorting.css"
import SortingButton from "./SortingButton/SortingButton"

export default function Sorting({ onClick }) {
    const [tabName, settabName] = useState("lowPrice")

    function handleClickTabName(name) {
        settabName(name)
        onClick && onClick(tabName)
    }

    return (
        <div className="sorting">
            <SortingButton
                isActive={tabName == "lowPrice"}
                onClick={() => handleClickTabName("lowPrice")}
            >
                Самый дешевый
            </SortingButton>
            <SortingButton
                isActive={tabName == "fast"}
                onClick={() => handleClickTabName("fast")}
            >
                Самый быстрый
            </SortingButton>
        </div>
    )
}