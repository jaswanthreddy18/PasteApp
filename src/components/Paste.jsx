import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast, { Toaster } from 'react-hot-toast';

const Paste = () => {
    
    const pastes = useSelector((state) =>
    state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const filterData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId))
    }
  return (
    <div>
        <input type="search" 
        className='p-3 mt-4 rounded-2xl min-w-[600px]'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='flex flex-col gap-2 mt-7'>
            {
                filterData.length > 0 &&
                filterData.map(
                    (paste) => {
                        return (
                            <div className='border' key = {paste?._id }>
                                <div>
                                {paste.title}
                                </div>
                                <div>
                                {paste.content}
                                </div>
                                <div className='flex flex-row gap-4 place-content-evenly'>
                                    <button>
                                        <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                                    </button>
                                    <button>
                                        <a href={`/pastes/${paste?._id}`}>View</a>
                                    </button>
                                    <button onClick={ () => handleDelete(paste?._id)}>Delete</button>
                                    <button onClick={() => {navigator.clipboard.writeText(paste?.content)
                                    toast.success("copied to clipboard")
                                    }}>Copy</button>
                                    <button>Share</button>
                                </div>
                                <div>
                                    {paste.createdAt}
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Paste 