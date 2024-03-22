import axios from "axios";

const url = "http://localhost:8080/eventmanagement"

export const Loginperformance = async (object) => {
    const credentials = object.username + ":" + object.password;

    const token = btoa(credentials);

    try {
        const t = await axios.get(`http://localhost:8080/eventmanagement/`,
            {
                headers: {
                    "Authorization": `Basic ${token}`
                }
            })
        if (t.data) {
            sessionStorage.setItem("auth", token)
            return;
        }
    }
    catch (err) {
        alert(err);
    }
}


export const Createvalues = async (object) => {
    const temp = await axios.post(`http://localhost:8080/eventmanagement/create`, object, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem("auth")}`
        }
    });
    return temp;
}


export const Listvalues = async () => {
    const temp = await axios.get(`http://localhost:8080/eventmanagement/`,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem("auth")}`
            }
        });

    return temp;
}

export const readonevalue = async (id) => {
    const temp = await axios.get(`http://localhost:8080/eventmanagement/readonly/${id}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem("auth")}`
        }
    });

    return temp;
}


export const updatevalues = async (object) => {
    const t = await axios.put(`http://localhost:8080/eventmanagement/update`, object,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem("auth")}`
            }
        })
}


export const deleteonevalue = async (id) => {
    const t = await axios.delete(`http://localhost:8080/eventmanagement/delete/${id}`,
        {
            headers: {
                "Authorization": `Basic ${sessionStorage.getItem("auth")}`
            }
        })
    return t;
}