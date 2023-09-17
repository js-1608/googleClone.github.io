import {TbGridDots} from 'react-icons/tb';
import Image from "next/image";
import Link from "next/link";




const Header :React.FC =()=>{
    const url :string="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
    // const url2: string = "photo.jpg";

    return (
        <div className='flex justify-end p-3 space-x-4 items-center'>
            <Link href="https://mail.google.com" className='text-sm hover:underline cursor-pointer'>gmail</Link>
            <Link href="https://imagesgoogle.com"className='text-sm hover:underline cursor-pointer'>Images</Link>
            <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full'/>
             <Image 
                src={url} 
                alt="dp" 
                className="rounded-full object-cover"
                width={30}
                height={100}
                style={{ height: 30 }}
            /> 
        </div>
    )
}
export default Header;