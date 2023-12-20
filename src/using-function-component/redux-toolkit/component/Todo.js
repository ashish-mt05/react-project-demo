import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../api-call-using-thung/TodoSlice';

export default function Todo() {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state);
    console.log(stateData.todoData.data);
    const callApi = () => {
        dispatch(fetchTodos());
    }

    return (
        <div>
            <button onClick={callApi}>fetchAPiData</button>
            <hr />
            <table>
                <thead>
                
                        : <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>User Id</th>
                        </tr>
                    
                </thead>
                <tbody>

                    {
                        stateData.todoData.isLoading ? <p>Loading..</p>
                            : stateData.todoData.data && stateData.todoData.data.map((item, index) => {
                                return <>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.userId}</td>
                                    </tr>
                                </>
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}
