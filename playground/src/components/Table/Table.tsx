// import React from 'react';
// import styles from './Table.module.css';

import { categories } from '../../App';

function Table() {
  return (
    <div className='container mx-auto px-10'>
      <div className='flex justify-center'>
        <select
          className='grow rounded-md'
          name='categories'
          id=''
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { Table };
