
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Listvalues } from './connect';
import { useNavigate } from 'react-router';

export const Listpage = () => {

    const navi = useNavigate();

    const readpage = () => {
        navi("/readpage")
    }

    const [eventdetails, setEventdetails] = useState([])

    const myvalues = async () => {
        const temp = await Listvalues();
        setEventdetails(temp.data);
    }

    useEffect(() => {
        myvalues();
    })
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <table className='table table-striped table-info mt-5'>
                        <thead>
                            <tr>
                                <th>EVENT NAME</th>
                                <th>EVENT NUMBER</th>
                                <th>EVENT LOCATION</th>
                                <th>EVENT DATE</th>
                                <th>EVENT ENTRY PRICE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                eventdetails.map((event) => (
                                    <>
                                        <tr>
                                            <td>{event.eventName}</td>
                                            <td>{event.eventNumber}</td>
                                            <td>{event.eventLocation}</td>
                                            <td>{event.eventDate}</td>
                                            <td>{event.eventEntryprice}</td>
                                            <td>
                                                <button className='btn btn-outline-secondary'>
                                                    <a href={`readpage/${event.eventNumber}`}>READ</a>
                                                </button>
                                                <button className='btn btn-outline-warning'>UPDATE</button>
                                                <button className='btn btn-outline-danger'>DELETE</button>

                                            </td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}