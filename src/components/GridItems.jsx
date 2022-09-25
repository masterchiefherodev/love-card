import { Card } from "./Card"
import cardprops from "../static/CardsProps.json"

export const GridItems = () => {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      {cardprops.map((item) => <Card key={item.id} item={item} />)}
    </div>
  )
}
