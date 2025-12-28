import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { getNotes, addNote, deleteNote } from '../actions/actions'

const noteListSelector = state => state.list.notes

const NoteList = (props) => {
  const notes = useSelector(noteListSelector, shallowEqual)
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getNotes())
  }, [dispatch])

  return (
    <div>
      <div>
        <h3>list of notes</h3>
        {
          notes.map(e => (
            <div key={e.id}>
              {e.content}
              <button onClick={() => dispatch(deleteNote(e.id))}>Delete</button>
            </div>
          ))
        }
      </div>
      <div>
        <h3>add a note</h3>
        <input type='text' placeholder='note content' onChange={(evt) => setContent(evt.target.value)} />
        <input type='button' value='add' onClick={() => dispatch(addNote(content))} />
      </div>
    </div>
  )
}

export default NoteList