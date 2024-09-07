import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
function MessageInput() {
    const chatSelected = false;
  return (
     chatSelected ?
    (<form className='px-4 my-3'>
    			<div className='w-full relative'>
     				<input
     					type='text'
     					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
     					placeholder='Send a message'
     				/>
     				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                     <LuSendHorizonal />
     				</button>
     			</div>
     		</form>
        )
            :

        (<NoChatSelected />)

    
        )
}

const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome </p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

export default MessageInput