import React from 'react';

const EventBubble = () => {

    const handleParent = (event) => {
       console.log('parent: ', event);
    }

    const handleChild = (event) => {
        event.stopPropagation();
       console.log('child: ', event);
    }

  return (
    <div onClick={handleParent} className='bg-dark text-white mt-4 p-2'>
        <button className="btn btn-info" onClick={handleChild}>Handle</button>
    </div>
  )
}

export default EventBubble;