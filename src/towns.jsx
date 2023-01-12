import React from 'react';
import ReactDOM from "react-dom/client";


function ListItem(props) {
// Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

export function TownList(props) {
    const town = props.towns;
    const listItems = towns.map((town) =>
// Correct! Key should be specified inside the array.
            <ListItem key={town.toString()}
                      value={town}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const towns = [
    'Abington',
    'Braintree',
    'Canton',
    'Carver',
    'Cohasset',
    'Duxbury',
    'Halifax',
    'Hanson',
    'Hanover',
    'Hingham',
    'Holbrook',
    'Hull',
    'Marshfield',
    'Milton',
    'Norwell',
    'Pembroke',
    'Plympton',
    'Quincy',
    'Randolph',
    'Rockland',
    'Scituate',
    'Weymouth',
    'Whitman',
];

export function Towns() {
    return (
        <div>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TownList towns={towns}/>);