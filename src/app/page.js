import React from 'react';
import {image} from './images'


export default function Carosal() {
  return (
    <div className='App'> 
      <ul>
        <button className='btn-left'>Prev</button>
        <button className='btn-right'>Nex</button>
        <li className='coro-img'>
          <img src =  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Image 1  for carosel"/>
          <img  src = "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt= "Image 2 for carosel" />
          <img  src = "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt = "Image 3  for carosel"/>
          <img  src =  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "Image 4  for carosel"/>      
          <img  src = "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "Image 5  for carosel"/>
          <img  src = "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="Image 6  for carosel" />
        </li>
      </ul>
    </div>
  )
}

