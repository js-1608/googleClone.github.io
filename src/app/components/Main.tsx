 
  'use client'
  import 'regenerator-runtime'
  import Image from "next/image";
  import {AiOutlineSearch,AiFillCamera } from 'react-icons/ai';
  import {BiMicrophone } from 'react-icons/bi';
  import { useState } from "react";
  import{BsFillMicFill} from 'react-icons/Bs';
  import { useRouter } from "next/navigation";
  import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



 
 
 const Main : React.FC=()=>{
    const googleLogo: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
     const[search ,setSearch]=useState<any>('');
     const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      const router = useRouter();
     const onSearchSubmit=(e:React.FormEvent<HTMLFormElement> |React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        router.push(`https://google.com/search?q=${search}`);
     
     }
    const startListening=()=>{
        // SpeechRecognition.startListening({continous:true,langunage:'en-IN'});
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

    }
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setSearch(transcript);
    }
   

    
    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <div className="items-center flex flex-col mt-28">
            <Image 
                src={googleLogo}
                alt="logo"
                width={270}
                height={100}
            />
            <form 
            className="flex border m-2 px-5 py-5 rounded-full w-2/5 items-center hover:shadow-md"
            onSubmit={(e)=>onSearchSubmit(e)}
            >
                <AiOutlineSearch className="text-xl text-slate-400"/>
                
                
                <input type="text" className="w-full focus:outline-none ml-4"
                value={search || transcript}
                onChange={(e)=>setSearch(e.target.value)}
                />
              {  
                listening?
                <BsFillMicFill
                className="text-2xl text-slate-400 mr-4" 
                onClick={() => stopListening()} // Corrected
            />
            
                :                
                <BiMicrophone
                onCLick={()=>startListening()}
                className="text-2xl text-slate-400 mr-4" />

              }
                <AiFillCamera className="text-2xl text-slate-400 "/>
            </form>
            <div> 
                <button className="bg-slate-100 mr-3 px-2 py-4 rounded-xl text-sm hover:border"
                onClick={(e)=>onSearchSubmit(e)}
                >Google Search</button>
                <button 
                className="bg-slate-100 mr-3 px-2 py-4 rounded-xl text-sm hover:border"
                onClick={() => router.push('https://www.google.com/doodles')}>
                    I'm feeling Lucky</button>
            </div>
        </div>
    )
 }
 export default Main;