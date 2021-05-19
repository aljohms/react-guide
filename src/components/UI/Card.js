import './Card.css';
//children is reserved prop (spits everything in tha Card wrapper inside function)
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>
        {props.children}

    </div>
}

export default Card;