import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { readonevalue, updatevalues } from './connect';

export const EventUpdateForm = () => {
    const navi = useNavigate();

    const [eventdetails, setEventdetails] = useState({
        "eventNumber": 0,
        "eventName": "",
        "eventLocation": "",
        "eventDate": "",
        "eventEntryprice": 0
    })

    const gettingvalues = (temp) => {
        const { name, value } = temp.target
        setEventdetails(
            (get) => {
                return {
                    ...get,
                    [name]: value,
                }
            }
        )
    }
    const { myid } = useParams();

    const setvalues = async () => {
        const t = await readonevalue(myid);
        setEventdetails(t.data);
    }

    useEffect(
        () => {
            setvalues();
        }, [])


    const update = async () => {
        const t = await updatevalues(eventdetails);
        navi("/listall");
    }
    return (
        <>
            <div className='container '>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <h1 className='text-center text-decoration-underline text-uppercase mt-5'>Event management UPDATE FORM</h1>
                        <div className='row mt-3'>
                            <div className='col form-group'>
                                <label className='form-label'>Event Name</label>
                                <input className='form-control'
                                    type='text'
                                    placeholder='EventName'
                                    name='eventName'
                                    onChange={gettingvalues}
                                    value={eventdetails.eventName} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>EVENT NUMBER</label>
                                <input
                                    className='form-control'
                                    type='number'
                                    name='eventNumber'
                                    onChange={gettingvalues}
                                    value={eventdetails.eventNumber} />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <label className='form-label'>EVENT LOCATION</label>
                            <input
                                className='form-control'
                                type='text'
                                name='eventLocation'
                                onChange={gettingvalues}
                                value={eventdetails.eventLocation} />
                        </div>
                        <div className='row mt-3'>
                            <label className='form-label'>EVENT DATE</label>
                            <input
                                className='form-control'
                                type='date'
                                name='eventDate'
                                value={eventdetails.eventDate}
                                onChange={gettingvalues} />
                        </div>
                        <div className='row mt-3'>
                            <label className='form-label'>EVENT ENTRY FEE</label>
                            <input
                                className='form-control'
                                type='number'
                                name='eventEntryprice'
                                placeholder='entry price'
                                onChange={gettingvalues}
                                value={eventdetails.eventEntryprice} />
                        </div>
                        <div className='row justify-content-center mt-5'>
                            <button className='btn btn-outline-success col-5'
                                onClick={update}>UPDATE</button>
                            <button className='btn btn-outline-warning col-5 ms-4'>CANCEL</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}