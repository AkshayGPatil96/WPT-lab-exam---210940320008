
import { useState} from "react";

export default function App(){
  return(
    <>
      <MyComponent/>
    </>
  );
 }

function MyComponent(){
  const[chat,setChat] = useState("Lets chat here");
  const[list,setList]= useState([]);

  const LetsChatHere = () => {
    const newList = [chat,...list];

    setList(newList);
    setChat("");
  };


  const editChat = (e) => {
    const newChat = e.target.value;
    setChat(newChat);
  };


  return (
    <div>
       <h1>
        My ChatApp
      </h1>
      <p>by</p>
      <h6>AKSHAY</h6>
      <h6>210940320008</h6>

      <input type="text" value = {chat} onclick={editChat} />
      <input type="button" className="btn btn-secondary" onClick={LetsChatHere} />
    </div>
    
  );
}

