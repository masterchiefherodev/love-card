import { useState } from "react"
import { useCardChangeValues } from "../hooks/useCardChangeValues"

export const Card = ({item}) => {
  
  //const [CardText, setCardText] = useState(text)
  const {text, img, answer} = item;

  const [cardtext, changeValue] = useCardChangeValues(text, answer);

  return (
    <div className="flex flex-col group items-center bg-zinc-200 hover:bg-purple-400 hover:scale-105 transition ease-in-out delay-90  shadow-md rounded-md min-h-min" onClick={changeValue}>
      <img className="object-contain p-2 h-64" src={img || ""}></img>
      <h1 className="text-4xl text-rose-600 group-hover:text-zinc-200 m-2">{cardtext}</h1>
    </div>
  )
}
