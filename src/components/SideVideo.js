import React from "react";

const SideVideo = ({ sideVideos, clickHandler }) => {
	const videoMapper = sideVideos.map((object, index) => {
		return (
			<div key={index} id={object.id} className="sidevideo__main-container" 
				onClick={ () => {clickHandler(object.id)} }>
				<div className="sidevideo__template-container">
					<img className="sidevideo__image" src={object.image} alt="" />
					<div className="sidevideo__text-container">
						<h4 className="sidevideo__title-video">{object.title}</h4>
						<h4 className="sidevideo__channel">{object.channel}</h4>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="sidevideo">
				<h5 className="sidevideo__title">NEXT VIDEO</h5>
				{videoMapper}
			</div>
		</>
	);
};
export default SideVideo;