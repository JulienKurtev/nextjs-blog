import { useState, useEffect } from 'react';
import styles from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetails){
    const { email, name, message } = contactDetails;
    const formData = { email, name, message };

    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    } 
}

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState();
    const [error, setError] = useState();

    useEffect(() =>{
        if(status === 'success' || status === 'error'){
            const timer =  setTimeout(() => {
                setStatus(null);
                setError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    async function sendMessage(e) {
        e.preventDefault();

        setStatus('pending');

        try{
            await sendContactData({ email, name, message });
            setStatus('success');
            setEmail('');
            setName('');
            setMessage('');
        }catch(err){
            setError(err.message)
            setStatus('error');
            
        } 
    }

    let notification;

    if(status === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending',
            message: 'Your message is on its way!'
        };
    }

    if(status === 'success'){
        notification = {
            status: 'success',
            title: 'Successs',
            message: 'Your message has been send!'
        };
    }

    if(status === 'error'){
        notification = {
            status: 'error',
            title: 'Error',
            message: error
        };
    }

    return <section className={styles.contact}>
        <h1>How can I help you?</h1>

        <form onSubmit={sendMessage} className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label>E-mail</label>
                    <input type='email' id='email' required value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className={styles.control}>
                    <label>First Name</label>
                    <input type='text' id='name' required value={name} onChange={event => setName(event.target.value)}/>
                </div>
            </div>

            <div className={styles.control}>
                <label>Message</label>
                <textarea rows="5" value={message} onChange={event => setMessage(event.target.value)}></textarea>
            </div>

            <div className={styles.actions}>
                <button>Send</button>
            </div>
        </form>

        {notification && <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
        />}
    </section>
}