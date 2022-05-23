import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if(list)
    return JSON.parse(list);
  return [];
}

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert,setAlert] = useState({show:'',msg:'',type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      showAlert(true,'enter something','danger')
    }else if(name && isEditing){
      setList(list.map((item) => {
        if(item.id === editID)
          return {...item,title:name}
        return item;
      }));
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true,'value changed','success');
    }else{
      showAlert(true,'Items added to the List','success');
      const newItem = {id:new Date().getTime().toString(), title:name}
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show,msg,type});
  }

  const clearList = () => {
    showAlert(true,'Empty List','danger');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true,'Item removed','danger');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const edittedItem = list.find((item) => item.id === id);
    setName(edittedItem.title);
    setIsEditing(true);
    setEditID(id);
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list));
  },[list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type="text" className='grocery' placeholder='eg. eggs' value={name} onChange={(e)=> setName(e.target.value)}/>
          <button type="submit" className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
    </section>
  )
}

export default App
