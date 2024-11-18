import styles from './Contact.module.css';





export const Contact = (props) => {

    const contacts = props.className;

    return (
        <div className={styles["container"]}>
        <h1 className={styles['h1']}>Контакти</h1>
        {contacts.map((contact, index )=> (
                    <div key={index}className={styles['box']} >
                        <div className={styles['element']}>{contact.firstName}</div>
                        <div>{contact.lastName}</div>
                        <div>{contact.phone}</div>
                        <div>{contact.gender}</div>
                    </div>
        ))}
        </div>
    )
}