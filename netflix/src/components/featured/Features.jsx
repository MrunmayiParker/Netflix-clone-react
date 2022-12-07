import React from 'react';
import './Features.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Features({type}) {
  return (
    <div className="featured">
		{type && (
			<div className="category">
				<span>{type =="movie" ? "Movies" : "Series"}</span>
				<select name="genre" id="genre">
					<option>Genre</option>
					<option>Adventure</option>
					<option>Comedy</option>
					<option>Drama</option>
					<option>Thriller</option>
					<option>Horror</option>
					<option>Sci-Fi</option>
					<option>Animation</option>
					<option>Documentary</option>
					<option>Fantasy</option>
					<option>Romance</option>
					<option>Crime</option>
					<option>Historical</option>
					<option>Reality TV</option>
					<option>Suspense</option>

				</select>
			</div>
		) }
        <img src="https://www.sorrisi.com/wp-content/uploads/2021/10/the-office.jpg">

        </img>

        <div className="featureinfo">
            <img src="https://img.nbc.com/sites/nbcunbc/files/images/2019/4/30/TheOffice-Logo-White-900x145.png" alt="" />
       

        <span className="featuredesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quo. Saepe quidem perferendis hic, corrupti fugit temporibus doloremque animi eaque molestias dolor. Beatae illum sequi ullam recusandae deserunt. Autem, dignissimos.
        </span>

        <div className="featurebuttons">
          	<button className="featureplay">
				
				<PlayArrowIcon />
				<span>Play</span>
          	</button>
          	<button className="featuremore">
				<InfoOutlinedIcon  />
				<span>Info</span>
			</button>
			</div>
        </div>
    </div>
  )
}

export default Features;