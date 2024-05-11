import "./Appstyle.css";
import { useState } from "react";
import VideoCapture from "./VideoCapture";
import ShowResult from "./ShowResult";

const App = () => {
	let [recordOption, setRecordOption] = useState("video");

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};

	return (
		<div>
			<div className="mid">
			<h1 className="content-marq">Audio and Video Recorder</h1>
			</div>
			<div className="button-flex">
				<button  onClick={toggleRecordOption("video")}>Go Live</button>
			</div>
			<div>
				{<VideoCapture/>}
				
			</div>
			<ShowResult/>
		</div>
	);
};

export default App;