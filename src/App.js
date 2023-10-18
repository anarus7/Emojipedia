import logo from "./logo.svg";
import "./App.css";
import Entry from "./Entry";
import emojipedia from "./emojipedia";


//1.Crate Entry Component
//2.Create props to replace hardcoded data
//3.Import the emojiedia data
//4.Map trough the emojipedia array and render Entry components

function  CreateEntry(emojiTerm){
  return <Entry
  key={emojiTerm.id}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  description={emojiTerm.meaning}
  />

}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(
emojiTerm => {
  return  <Entry
  key={emojiTerm.id}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  description={emojiTerm.meaning}
  />

})}
      </dl>      
    </div>
  );
}

export default App;
