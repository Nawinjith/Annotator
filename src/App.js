import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import { MainRouter } from './components/routers/main-router';
import socketIOClient from "socket.io-client";
import { liveServer } from './config/endpoints/main.endpoint';
import { useLocation } from 'react-router-dom';

const App = () => {
  

  const  [socket,setSocket]=useState(null);
  let location = useLocation();

  // useEffect(() => {
  //   if(auth.isLogged){
  //     const temp=socketIOClient(`${liveServer}/user`,{transports: ['websocket']});
  //     let token=localStorage.getItem("jwt")
  //     temp.emit("userToken",token)
  //     setSocket(temp);  
  //   }else if(socket){
  //     socket?.close()
  //   }
  // }, [auth])


  // useEffect(() => {
    
  //   let images=document.getElementsByTagName("img");
  //   let i=0,length=images.length;
  //   let a=Date.now();
  //   console.log(length);
  //   if(length>0){
  //     setImgLoader(true)
  //   }
  //   console.log(images)
  //   for(let element of images){
  //     console.log(element)
  //     element.addEventListener('onLoad',()=>{
  //       console.log(i)
  //       i++;
  //       if(i===length){
  //         let b=Date.now()
  //         console.log(b-a);
  //         console.log("loaded") 
  //         setImgLoader(false);
  //       }
  //     })
  //   }
  // }, [location.pathname])


  console.warn=()=>undefined;
  // console.log=()=>undefined;

  return <MainRouter />;
}

export default App;
