import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Loginperformance } from './connect'

export const Login = () => {
    const [user, setUser] = useState({
        "username": "",
        "password": ""
    })

    const onPerformance = (temp) => {
        const { name, value } = temp.target;
        setUser((get) => {
            return {
                ...get,
                [name]: value
            }
        })
    }


    const onlog = async () => {
        await Loginperformance(user);
        window.location.assign("/");
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-md-9 col-sm-12 ">
                        <div className="form-group">
                            <label className="form-label">USERNAME</label>
                            <input
                                className='form-control'
                                placeholder='Admin/Enter your username'
                                onChange={onPerformance}
                                type='text'
                                value={user.username}
                                name='username'
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">PASSWORD</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Admin/Enter your Perfect Password"
                                onChange={onPerformance}
                                value={user.password}
                                name='password'
                            />
                        </div>
                        <div className="row justify-content-around mt-3">
                            <button
                                className="btn btn-outline-success"
                                onClick={onlog}>
                                LOGIN</button>
                            <button
                                className="btn btn-outline-danger">
                                CANCEL</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}