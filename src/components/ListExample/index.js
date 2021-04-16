import React from 'react';
import data from './../../utils/data.json';
import { v4 } from 'uuid';

//  import faker from 'faker';

class ListExample extends React.Component {

    state = {
        value: 0,
        isShare: true
    }

    // constructor(props) {
    //     super(props)
    // }

    render() {

        console.log(data);

        return (
           <ul>
               {data.map(obj => {

                   const { value } = obj;

                   console.log(v4());

                   return <li key={v4()}>{value}</li>
               })}
           </ul>
        )
    }
}

export default ListExample;