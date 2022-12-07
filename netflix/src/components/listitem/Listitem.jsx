import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import './Listitem.scss';
import {useState } from 'react';
export default function Listitem({index}) {

    const [ishover, setishover] = useState(false);
    const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        // the formula for expanding the card inthe slider index * 225(width of the original box) - 50 (everytime we subtract by 50) aand pass the index through the main func 
        <div class="listitem" style={{left:ishover && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setishover(true)} onMouseLeave={() => setishover(false)}>
            <img src="https://picfiles.alphacoders.com/460/thumb-460917.jpg"></img>
            
            {ishover && (
                <>
            
            <video src={trailer} autoPlay={true} loop />

                    <div className="iteminfo">
                        <div className="icons">
                            <PlayArrowIcon className="icon" />
                            <AddIcon className="icon" />
                            <ThumbUpOutlinedIcon className="icon"  />
                            <ThumbDownOffAltOutlinedIcon className="icon" />
                        </div>

                        <div className="iteminfotop">
                            <span>1 hour 20 mins </span>
                            <span className="limit">+16 </span>
                            <span>2002 </span>
                        </div>

                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque modi nobis! 
                        </div>

                        <div className="genre">Comedy</div>
                    </div> 
                </>
            )}
        </div>
    )
}
