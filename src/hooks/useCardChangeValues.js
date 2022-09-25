import { useState } from "react"

export const useCardChangeValues = ( initialValue = "No value", answer = "No value" ) => {

    const [ cardtext, setCardText ] = useState( initialValue )

    const changeValue = () => {
        cardtext === initialValue ? setCardText( answer ) : setCardText( initialValue )
    }

    return [
        cardtext,
        changeValue,
    ]

}