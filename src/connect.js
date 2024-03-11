import axios from "axios";

export const Loginperformance = async (object) => {

    const credentials = object.username + " : " + object.password;

    const token = btoa(credentials);


    try {

        const temp = await axios.get(`http://localhost:8080/eventmanagement/`,
            {
                headers: {
                    "Authorization": `Basic ${token}`
                }
            })


        if (temp.data) {
            sessionStorage.setItem("auth", token);
        }
    }
    catch (err) {
        alert(err);
    }

}


