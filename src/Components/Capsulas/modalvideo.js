import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import YouTube from 'react-youtube';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: "640",
	height: "60vh",
	bgcolor: '#A5A6F6',
	borderRadius: 3,
	color: "#35366E",
	justifyContent: "center",

	
	// border: '2px solid background.paper',
	// boxShadow: 20,
	p: 4,
};



const VideoModal = ({bias, foto, explicacion, video}) => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
		  autoplay: 1,
		},
	  };
	
	const imgStyle = {
		borderRadius: 8,
	}



	return (
		<div>
			<img alt="nombre" src={foto} width={400} maxHeight={300} onClick={()=> setOpen(true)} style={imgStyle} />
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} >
					<YouTube videoId={video} opts={opts} />
					<br/>
					<Typography variant="h4" component="h2" sx={{textAlign:"left"}}>
						{bias} Bias
					</Typography>
					<Typography fontSize={16} sx={{ mt: 2 }}>
						{explicacion}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
	}
export default VideoModal;