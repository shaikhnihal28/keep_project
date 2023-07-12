import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

function App() {
  const [addItem, setAddItem] = useState([]);
  useEffect(() => {
    alert("i am clicked");
    // document.title = addItem;
  });

  const addNote = (note) => {

    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) => 
       olddata.filter((currdata, indx) => {
        return indx !== id;
       
      }
      )
      
    ) 
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
