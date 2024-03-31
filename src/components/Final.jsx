import React from 'react';
import { useLocation , Link} from 'react-router-dom';

const Final = () => {
    const location = useLocation();
    const hashmap = location.state ? location.state.hashmap : [];
    const sortedHashmapKeys = Object.entries(hashmap)
        .sort(([, valueA], [, valueB]) => valueB - valueA) // Sort based on values
        .map(([key], index) => ({ key, serial: index + 1 })); // Extract keys and add serial numbers
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='header' style={{display:'inline-block'}}>I got your back!</h1>
            <h2>The Order You must Follow:</h2>
            <ul className='task-list' style={{ listStyleType: 'none', padding: 0 }}>
                {sortedHashmapKeys.map(({ key, serial }) => (
                    <li key={key} style={{ marginBottom: '10px' }}>
                        <span style={{ fontWeight: 'bold' }}>{serial}.</span> {key}
                    </li>
                ))}
            </ul>
            <p style={{textAlign: 'center'}}><Link to ="https://twitter.com/kvcodes7" style={{ color: 'blue', textDecoration: 'underline'}}>Follow me!</Link></p>
        </div>
    );
};

export default Final;
