import {useState, useEffect} from'react';
import axios from 'axios';


const EmployeeInfo= () => {
const [error, setErrror]= useState(null);
//const [isLoaded, setIsLoaded]= useState(false);
const [items, setItems]= useState([]);

useEffect(() => {
    axios.get ("http://dummy.restapiexample.com/api/v1/employees")
        .then ((result) => {
      //  setIsLoaded(true);
        setItems(result.data.data);
    });
}, []);
    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (items.length<1) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {console.log(items)}
                {items.map((item) => (
                    <li key={item.id}>{item.employee_name}</li>
                ))}
            </ul>
        );
    }
}
    export default EmployeeInfo;