import { MinusIcon,PlusIcon } from "@radix-ui/react-icons";
export default function CountButtons({count, setCount, min, max}){
    return(
        <>
        <div className="button-container">
        <button 
        className="count-btn" 
        disabled={count <= min}
         onClick={() => {
            setCount((prev) => Math.max (prev -1,min));
            }}
            >
        <MinusIcon className="count-btn-icon"/>
        </button>

        <button 
        className="count-btn" 
        disabled={count >= max}
        onClick={() => {
            setCount((prev) => Math.min (prev + 1,max));
            }}
          >
        <PlusIcon className="count-btn-icon"/>
        </button>
      </div>
        </>
    );
}