import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
const ViewPaste = () => {
    const {id} = useParams();
    const allpastes = useSelector((state) => state.paste.pastes); 
    const paste = allpastes.filter((p) => p._id === id)[0];

  return (
    <div> 
        <input type="text" 
            className='p-2 border border-black rounded-md w-[60%] pl-5 mt-4'
            placeholder='Enter Title Here :'
            value={paste.title}
            disabled
            onChange={(e) => {setTitle(e.target.value)}}
            />

        <div className='mt-4'>
            <textarea className='rounded-2xl mt-4 min-w-[500px] p-4 h-[500px]'
            value={paste.content} placeholder='Enter the content here'
            onChange={(e) => {setValue(e.target.value)}} disabled />
        </div>       
    </div>
  )
}

export default ViewPaste