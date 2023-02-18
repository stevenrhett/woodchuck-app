import React from 'react';

function ListItem({ value }) {
    return <li>{value}</li>;
}

export function TownList({ towns }) {
    const listItems = towns.map((townObject) => (
        <ListItem key={townObject.id}
                  value={townObject.town} />
    ));
    return (
        <ul>
            {listItems}
        </ul>
    );
}