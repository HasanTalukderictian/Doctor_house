import React from 'react';

const BookingRow = ({booking}) => {
    const {doctorName, category, price, date, name} = booking;
    return (
        <div>
            <tr>
                            <th> {doctorName} </th>
                            <th> {category}  </th>
                            <td>
                              {price}  
                               
                            </td>
                            <td>{date}</td>
                            <th>{name}</th>
                        </tr>
        </div>
    );
};

export default BookingRow;