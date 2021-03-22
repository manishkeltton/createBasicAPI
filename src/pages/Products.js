import { Link } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const initialValue = [
    {
        offset: 0,
        data: [],
        perPage: 5,
        currentPage: 0
    }
]

const Products = () => {

    const [users, setUsers] = useState([]);
    const [data, setData] = useState(initialValue);
    const [count, setCount] = useState(0);
    
    const getUsers = async () =>{
        try{
            const response = await fetch('https://api.github.com/users');
            setUsers(await response.json()); 
        }catch(error){
            console.log("my error"+error);
        }
    }

    useEffect(()=>{
        getUsers();
    },[]);

    const addItem = () => {
        setCount(count + 1)
    }

    const decItem = () => {
        setCount(count-1)
    }

    return (
        <div className="products">
            <div class="card-columns">
                {
                    users.map((Elm)=>{
                        return (
                            <div keys={Elm.id} class="card-body text-center">
                               <div class="image"><img src={Elm.avatar_url} class="rounded" width="155"/></div>
                               <h4 class="card-text">Name</h4>
                               <h4 class="card-text">Price</h4>
                               <h4 class="card-text">item {count}</h4>
                               <button class="btn btn-outline-primary mr-1"  onClick={addItem}>inc</button>
                               <button class="btn btn-outline-primary mr-1" onClick={decItem}>dec</button>
                               <Link class="btn btn-primary mr-1" to="#">Cart</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    }

export default Products
