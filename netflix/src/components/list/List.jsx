import React from 'react'
import { useRef , useState } from 'react';
import './List.scss';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Listitem from '../listitem/Listitem';

export default function List() {
	const [slideno, setslideno] = useState(0);
	const [move, setmove] = useState(false);
	const listref = useRef();

  	const handleClick =  (direction) => {
		setmove(true)
		//for getting the distance on clickfuntion
		let dist = listref.current.getBoundingClientRect().x - 50
      	if(direction === "left" && slideno>0){
			setslideno(slideno-1);
			listref.current.style.transform =  `translateX(${230 + dist}px)`
	  	}	

		if(direction === "right" && slideno<4){
			setslideno(slideno+1);

			listref.current.style.transform =  `translateX(${-230 + dist}px)`
	  	}
  }
  return (
    <div className="list">
       <span className="listtitle">
            Continue to watch
       </span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon className="slidearrow left" onClick = { () => handleClick("left")} style={{display: !move && 'none'}} /> 
            <div className="listcont" ref={listref}>
                <Listitem index={0} />
                <Listitem index={1} />
                <Listitem index={2} />
                <Listitem index={3} />
                <Listitem index={4} />
                <Listitem index={5} />
                <Listitem index={6} />
                <Listitem index={7} />
                <Listitem index={8} />
                <Listitem index={9} />
               

                

            </div>
            <ArrowForwardIosOutlinedIcon className="slidearrow right" onClick = { () => handleClick("right")}  />
        </div>


    </div>
  )
}
