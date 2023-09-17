import exp from "constants";


const Footer :React.FC =()=>{

    return(
        <div className="absolute bottom-0 w-full bg-neutral-100">
            <p className="py-3 px-8 text-sm text-slalte-600 ">india</p>
            <div className="flex">
           <ul className="flex [&>*]:mr-6 text-sm tect-slate-600 p-1">
            <li>About</li>
            <li>Advetising</li>
            <li>Business</li>
            <li>How search works</li>
           </ul >
           <ul className="flex [&>*]:mr-6 text-sm tect-slate-600 ml-auto p-1">
            <li>Privacy </li>
            <li>Terms</li>
            <li>Settings</li>
           </ul>
           </div>
        </div>
    );
}

export default Footer;