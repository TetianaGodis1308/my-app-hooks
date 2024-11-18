// // import styles from "./ComponentTest.module.css"

// // export const ComponentTest = () => {
// //     return (
// //         <h1 className={styles["test"]}>
// //             "Success!"
// //         </h1>
// //     )
// // }

// import { useState } from 'react';

// export const ContactSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const contacts = [
//     'Іван Петров',
//     'Олена Сидоренко',
//     'Микола Коваленко',
//     'Анна Іванова'
//   ];

//   const filteredContacts = contacts.filter(contact =>
//     contact.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Пошук контакту..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredContacts.map((contact, index) => (
//           <li key={index}>{contact}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

