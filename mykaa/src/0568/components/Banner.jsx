import React from 'react'
import Slider from '../utils/Slider'

const Banner = () => {
  return (
		<div>
			<Slider
				src={[
					"https://images-static.nykaa.com/uploads/44a819ee-6614-48c4-b5b1-932c3479d4e2.jpg?tr=w-2400,cm-pad_resize",
					"https://images-static.nykaa.com/uploads/5d515b32-6bb1-44d0-889c-b709c2545e54.jpg?tr=w-2400,cm-pad_resize",
					"https://images-static.nykaa.com/uploads/cecdd883-aa65-4e68-8f78-bdc82d5577a0.jpg?tr=w-2400,cm-pad_resize",
				]}
			/>
		</div>
  );
}

export default Banner
