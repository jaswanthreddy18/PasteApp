import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { updateToPastes, addToPastes } from '../redux/pasteSlice';
const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId= searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allpastes = useSelector((state) => state.paste.pastes); 

    useEffect(() => {
        if(pasteId){
          const paste = allpastes.find((p) =>p.
         _id === pasteId);
         setTitle(paste.title);
         setValue(paste.content);
        }
      }, [pasteId])

    function createpaste(){
        const paste = {
            title : title,
            content : value,
            _id : pasteId ||
                Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
        
        if(pasteId){
            dispatch(updateToPastes(paste));
        }
        else{
            dispatch(addToPastes(paste));
        }
        setTitle('')
        setValue('')
        setSearchParams({})
    }
  return (
    <div>
        <div className='flex gap-7 mt-6 place-content-between'>
            <input type="text" 
            className='p-2 border border-black rounded-md w-[80%] pl-5'
            placeholder='Enter Title Here :'
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            />
            <button className='p-2 border border-black rounded-md px-3' onClick={createpaste}>
                {
                    pasteId ? "Update My Paste" :
                    "Create My Paste"
                }
            </button>
        </div>

        <div className='mt-4'>
            <textarea className='rounded-2xl mt-4 min-w-[100%] p-4 h-[500px] '
            value={value} placeholder='Enter the content here'
            onChange={(e) => {setValue(e.target.value)}}></textarea>
        </div>       
    </div>
  )
}

export default Home