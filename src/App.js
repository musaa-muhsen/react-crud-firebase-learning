import React from 'react';
import firebase from './firebase';
import MovieInput from './MovieInput'
//import { v4 as uuidv4 } from 'uuid';


function App() {
  const [films, setFilms] = React.useState([])
  const [newFilmName, setNewFilmName] = React.useState()
  const [newSynopsis,setNewSynopsis ] = React.useState();

  // console.log(spells)
   React.useEffect(() => {
     //const fetchData = async () => {
       const database = firebase.firestore();
      const unsubscribe = database.collection("films").orderBy('createdAt', "desc").onSnapshot((snapshot) => {
        console.log(snapshot);
        const filmsData = [];
        snapshot.forEach(doc => filmsData.push(({...doc.data(), id: doc.id})))
        setFilms(filmsData);
       });
      //  const data = await database.collection("films").get()
      //  setFilms(data.docs.map(doc => ({...doc.data(), id: doc.id})))     
      // }
      // fetchData()
      return unsubscribe
   }, [])
  console.log(films)
  
   const handleInputChange = (e) => {
     const database = firebase.firestore()
    // console.log()
    // const one = 1;
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;

      database.collection('films').add({name: newFilmName, synopsis: newSynopsis, createdAt: timestamp() });

   }

   const handleFormSubmit = e => {
     
    e.preventDefault();
    setNewFilmName('');
    setNewSynopsis('');

  }

  return (
    <div> 
      <form autoComplete="off" onSubmit={handleFormSubmit}>
      <input value={newFilmName} required onChange={e => setNewFilmName(e.target.value)}/> 
      <input value={newSynopsis} required onChange={e => setNewSynopsis(e.target.value)}/> 

      <button onClick={handleInputChange}>Create</button>
       </form>
      
    <ul>
  { 
    films.map(film => (
      <div key={film.id}>
        <MovieInput film={film}/>
        {/* <span>{film.name}</span> |<span> {film.synopsis}</span> */}
        </div>
    ))
  }
 </ul>
 </div>
  );
}

export default App;
