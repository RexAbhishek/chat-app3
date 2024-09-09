import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';

function Messages() {
	const { loading, messages } = useGetMessages(); 
	console.log("messages:", messages);
  return (
	<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} >
						<Message message={message} />
					</div>
				))}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
  )
}

export default Messages

{/* <div className='px-4 flex-1 overflow-auto'>
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 		</div> */}