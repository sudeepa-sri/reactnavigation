import React, { useContext } from 'react';
import { nameContext } from './Drill';

const Stomach = () => {
    const { a, colour } = useContext(nameContext); // Destructure both 'a' and 'colour'

    // Define styles
    const s1 = {
        color: "red", // Red color style
    };
    const s2 = {
        color: "blue", // Blue color style
    };

    return (
        <div>
            <div style={colour ? s1 : s2}>
                <h1>Stomach: {a}</h1> {/* Displaying 'a' */}
            </div>
        </div>
    );
};

export default Stomach;
