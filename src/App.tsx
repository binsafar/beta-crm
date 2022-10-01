import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./apps/hooks";

const App = () => {

    const selector = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(selector)
    }, [])

    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
}

export default App;
