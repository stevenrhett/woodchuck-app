import React from 'react';


function ListItem(props) {
// Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}
export function TownList(props) {
    const towns = props.towns;
    const listItems = towns.map((townObject) =>
// Correct! Key should be specified inside the array.
            <ListItem key={townObject.town}
                      value={townObject.town}/>
    );
    return (
        <ul>
            {listItems}
        </ul>

    );
}
