"use client"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { CounterActions } from '@/store/slice/slice'

function CounterApp() {
    const CounterValue = useSelector((state: RootState) => state.slice.value)
    const dispatch = useDispatch();
    const inc = () => {
        dispatch(CounterActions.increment())
    }
    const dec = () => {
        dispatch(CounterActions.decrement())
    }
    return <div>
        <div className="flex justify-center mt-36 items-center">
            <button className="px-4 py-1 bg-red-400 rounded-md" onClick={inc}>+</button>
            {CounterValue}
            <button className="px-4 py-1 bg-green-400 rounded-md" onClick={dec}>-</button>
        </div>
    </div>;
}

export default CounterApp;
