import axios from "axios";

const InfoUser = async () => {
    const response = await axios.post(
        "http://127.0.0.1:8000/user/")

    console.log(response)
}
export default InfoUser;