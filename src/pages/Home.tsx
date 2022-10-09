import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../apps/hooks";
import Header from "../components/Header";

const Home = () => {

    const store = useAppSelector(state => state);
    // const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(store)
    }, [])

    return (
        <div>
            <Header/>
        </div>
    )
}
export default Home;