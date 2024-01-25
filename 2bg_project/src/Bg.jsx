import React, { useState } from 'react';

function Bg() {
    const [state,setState] = useState('olive')
    return (
        <div className='w-screen h-screen duration-200 ' style={{backgroundColor:state}}>
            <div className='fixed bottom-12 inset-x-0 flex justify-center align items-center gap-5 px-2'>
                <div className='bg-white gap-12 w-[80vw] flex flex-wrap justify-evenly shadow-lg rounded-[30px] '>
                
                <button onClick={()=>{
                    setState("red")
                }} className='m-4'  style={{backgroundColor:"red"}}>blue</button>
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("green")
                }} className='m-4'  style={{backgroundColor:"green"}}>green</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                
                <button onClick={()=>{
                    setState("blue")
                }} className='m-4'  style={{backgroundColor:"Blue"}}>blue</button>
                </div>

            </div>

        </div>
    )
}

export default Bg
