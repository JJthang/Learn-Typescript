import { ILoginBody } from "@/models/request.model";
import axios from "axios";


export const authRequest = {
    login : (data : ILoginBody) => {
        axios.post<ILoginBody>("https://660521b72ca9478ea17f6c52.mockapi.io/Test", data)
    }
}