import { useState } from "react";
import styles from './Contacts.module.css'

export const Contacts = (props) => {
    const allcontacts = props.className;
    const [cont,setSearch] = useState('');
    const contacts = allcontacts.map((elem,index)=>elem.firstName);
    const filteredContacts = contacts.filter(contact =>
        contact.toLowerCase().includes(cont.toLowerCase())
    );
    console.log(filteredContacts)

return (
    <div className={styles['searchBox']}>
        <h1 className={styles['h1']}>Контакти</h1>
        <input className={styles['input']} type="text" placeholder="Пошук контакту..." value={cont} onChange={(e) => setSearch(e.target.value)}/>      
            <ul>{filteredContacts.map((contact, index) => (
                <li key={index} className={styles['element']}>{contact}</li>
                ))} 
            </ul>

    {/* <div>
                {allcontacts.map((contact, index )=> (
                <div key={index}>
                    <div>{contact.firstName}</div>
                    <div>{contact.lastName}</div>
                    <div>{contact.phone}</div>
                    <div>{contact.gender}</div>
                </div>
    ))}
    </div> */}
    </div>
)}