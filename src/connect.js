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

