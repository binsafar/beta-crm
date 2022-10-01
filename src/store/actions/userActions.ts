import axios, {AxiosResponse} from "axios";

const URL = "";

export const getUsers = () => {
    return () => {
        axios.get(URL).then((res: AxiosResponse<any>) => {
            console.log(res.data)
        }).catch((err: Error) => {
            console.log(err)
        })
    }
}

export const getOneUser = (id: number) => {
    return () => {
        axios.get(URL).then((res: AxiosResponse<any>) => {
            console.log(res.data)
        }).catch((err: Error) => {
            console.log(err)
        })
    }
}

export const updateUser = (id: number, data: any) => {
    return () => {
        axios.put(URL, data).then((res: AxiosResponse<any>) => {
            console.log(res.data)
        }).catch((err: Error) => {
            console.log(err)
        })
    }
}

export const deleteUser = (id: number) => {
    return () => {
        axios.delete(URL).then((res: AxiosResponse<any>) => {
            console.log(res.data)
        }).catch((err: Error) => {
            console.log(err)
        })
    }
}