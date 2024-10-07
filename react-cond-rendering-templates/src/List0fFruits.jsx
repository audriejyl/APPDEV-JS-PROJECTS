import ProtoTypes from 'prop-types'
export default function ListofFruits(props){
    const listItems = props.items.map(item =>
        <li key = {item.id}>
        <strong> {item.name}</strong>: &nbsp;
        {item.color}
        </li>)
    return(
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    )
}
ListofFruits.defaultProps = {
    category: "I do not like Fruits!",
    items: []
}