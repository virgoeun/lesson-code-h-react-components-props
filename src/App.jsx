import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import React, { useRef, useEffect } from "react";

import ReactPlayer from "react-player";

function App() {
  const playerRef = useRef(null); // Create a ref for the player

  //useRef is a React hook used to create mutable references to DOM elements or other React components.
  // vIn this case, it's being used to create a reference to the ReactPlayer component.

  

  // Use useEffect to call handleShowPreview
  // after the component has rendered
  useEffect(() => {
    
    handleShowPreview();
  }, []);
  // The empty dependency array ensures it runs only ONCE
  // after initial render
  // This is crucial because you want to access playerRef.current 
  // only after the ReactPlayer component has been mounted and is available in the DOM. 
  const handleShowPreview = () => {
    console.log("Button clicked");
    if (playerRef.current) {
      //checks if the playerRef.current exists and is not null or undefined
      // meaning the ReactPlayer component has been rendered and assigned to playerRef (check the downbelow it was assigned)
      playerRef.current.showPreview();
    }
  };
  
  console.log("PlayerRef", playerRef);
  console.log("Current", playerRef.current);
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Harper" />
      <Greeting firstName="Michelle" />
      <Greeting firstName="Andrea" />

      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: "BCN", course: "WEB" }}
        />
        <StudentCard
          name="Mat"
          week={8}
          info={{ city: "MIA", course: "DATA" }}
        />
      </StudentList>

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
      <ReactPlayer 
        light={<img src='https://example.com/thumbnail.png' alt='Thumbnail' />}
        ref={playerRef} // the ref attribute is used to assign the playerRef to the ReactPlayer component.
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing // playing={true}
        controls
        volume="1"
        // light //It provides a visual preview of the video content without automatically starting playback.
      />
      <button onClick={handleShowPreview}>Preview</button>
    </div>
  );
}

export default App;
