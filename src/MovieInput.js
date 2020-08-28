import React from 'react'
import firebase from './firebase';

 const MovieInput = ({film}) => {
    console.log(film); //{synopsis: "some words here1", name: "harry potter"}
    const [name, setName] = React.useState(film.name);
    const [synopsis, setSynopsis] = React.useState(film.synopsis)
    console.log(synopsis);

    const onUpdate = () => {
        const database = firebase.firestore();
        database.collection('films').doc(film.id).update({...film, name,synopsis})
    }
    // const onUpdateSynopsis = () => {
    //     const database = firebase.firestore();
    //     console.log(film.id)
    //     console.log(synopsis)
    //     database.collection('films').doc(film.id).update({...film, synopsis})
    // }
   const onDelete = () => {
       const database = firebase.firestore()
       database.collection('films').doc(film.id).delete()

   }

    return (
        <>
        
        
        <input value={name}
        onChange={e => {setName(e.target.value)}} />
        
        
        <input value={synopsis}
        onChange={e => {setSynopsis(e.target.value)}} />
        {/* <button onClick={onUpdateSynopsis}>Update</button> */}
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>

        

        
        </>
    )
}

export default MovieInput 