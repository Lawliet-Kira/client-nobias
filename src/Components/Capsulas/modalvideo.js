import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ModalVid = () => {

	const [isOpen, setOpen] = useState(false)

	return (
		<React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
		</React.Fragment>
	)
}

ReactDOM.render(
  <ModalVid />,
    document.getElementById('root')
)