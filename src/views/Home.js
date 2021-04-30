import React, {useState, useEffect} from 'react'

function Home(){
    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [contacts,setContacts] = useState({firstName:"",lastName:""})
    const [contactList, setContactsList] = useState([])

    function handleChange(){
        setCounter(prev=>prev+1)
    }

    function handleToggle(){
        setToggle(prev=>!prev)
    }

    useEffect(()=>{
        if(toggle){
             const intervalId = setInterval(()=>{
                setTimer(prev=>prev+1)
            }, 1000)

            return () => clearInterval(intervalId)
        }
    },[toggle])

    function handleClick(e){
        e.preventDefault()
        const {name,value} = e.target
        setContacts(prev=>{
            return{...prev, [name]:value}
        })
    }

    function handleSubmit(e){ 
        e.preventDefault()
        setContactsList(prev=>[...prev,contacts])
    }

    const list = contactList.map(item=>{
        return(
            <div key={item.lastName}>
                <p>{`${item.firstName} ${item.lastName}`}</p>
            </div>
        )
    })


    return(<div>
        <h1>Home</h1>
        <p>{counter}</p>
        <input
        type="button"
        value = "Increment"
        onClick = {handleChange}
        name = "Increment"
        />
        <br/>
        <p>{timer}</p>
        <input type="button" onClick={handleToggle} value={toggle? "Stop":"Start"}/>
        <br/>
        <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        name="firstName"
        value={contacts.firstName}
        placeholder="First Name" 
        onChange={handleClick}
        />
        <br/>
        <input 
        type='text' 
        name="lastName"
        value={contacts.lastName}
        placeholder="Last Name" 
        onChange={handleClick}
        />
        <button>Add</button>
        </form>
        <h2>Contacts</h2>
        {list}
    </div>)
}

export default Home