import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router'
import { readonevalue } from './connect';
import { useEffect, useState } from 'react';

export const Read = () => {

    const [eventdetails, seteventdetails] = useState({});

    const getvalues = async () => {
        const temp = await readonevalue(id);
        seteventdetails(temp.data);
    }

    useEffect(() => {
        getvalues();
    })

    const { id } = useParams();
    return (
        <>
            <div className='row justify-content-center mt-5'>
                <div className='col-6'>
                    <h1 className='text-center text-warning'>MY EVENT DETAILS</h1>
                    <div className='card text-center bg-success'>
                        <img className='card-img' src={require('./logo_event.jpg')} style={{ height: '200px' }} />
                        <h4>EVENT NAME  :<span>{eventdetails.eventName}</span></h4>
                        <h4>EVENT NUMBER  :<span>{eventdetails.eventNumber}</span> </h4>
                        <h4>EVENT LOCATION  :<span>{eventdetails.eventLocation}</span> </h4>
                        <h4>EVENT DATE  : <span>{eventdetails.eventDate}</span></h4>
                        <h4>EVENT ENTRYPRICE  :<span>{eventdetails.eventEntryprice}</span> </h4>
                    </div>
                </div>
            </div>
        </>
    )
}