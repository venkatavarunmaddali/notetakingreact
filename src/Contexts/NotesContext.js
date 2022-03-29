import React, {useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import useLocalStorage from "../Hooks/useLocalStorage";

const NotesContext = React.createContext()


export function useNotes(){
	return useContext(NotesContext)
}

// {
// 	id: 
// 	note:
// }

export const NotesProvider = ({children}) => {
	const [notes,setNotes] = useLocalStorage("notes",[])
	function addnote({note}){
		setNotes(prevNotes => {
			return [...prevNotes, {id:uuidv4(),note:note}]
		})
	}
	function deletenote({id}){
		setNotes(prevNotes => {
			return prevNotes.filter(note => note.id !==id)
		})
	}
	function updatenote({id,note}){
		notes.filter(note=> {
			if(note.id ===id){
				note.note = "updatedtext";
			}
			return note;
		})
		setNotes(prevNotes => {
			return [...prevNotes]
		})
	}
	return (
		<NotesContext.Provider value={{
			notes,
			addnote,
			deletenote,
			updatenote,
		}}>{children}
		</NotesContext.Provider>
		)
}