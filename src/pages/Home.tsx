import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../apps/hooks";

const Home = () => {

    const store = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(store)
        console.log(dispatch)
    }, [])

    return (
        <div>
            <h1>home page</h1>
        </div>
    )
}
export default Home;