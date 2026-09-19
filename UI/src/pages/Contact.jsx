import React, { useState } from 'react';
import './Portfolio.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const Send = async (e) => {
        e.preventDefault();
        setLoading(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwX7_ZV3WeFTyZDoafU662lOqPtzZ6n2Xi0Ci4R2nqNzzH9qTFH-GkZI35Wn_wPpGUPAQ/exec';

        // Format data as URL-encoded query parameters for Google Apps Script compatibility
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('profession', profession);
        formData.append('mobile', mobile);
        formData.append('email', email);

        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString()
            });

            alert('Form has been submitted successfully and saved to Google Sheets!');
            
            // Clear form fields
            setName('');
            setProfession('');
            setMobile('');
            setEmail('');
            
        } catch (error) {
            console.error('Error!', error.message);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <div className="cont-box">
                <h3>Get in touch with us today!</h3>
                
                <form onSubmit={Send}>
                    <p>Name:</p>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    
                    <p>Profession</p> 
                    <input 
                        type="text" 
                        placeholder='Profession' 
                        value={profession} 
                        onChange={(e) => setProfession(e.target.value)} 
                    />
                    
                    <p>Mobile</p> 
                    <input 
                        type="tel" 
                        placeholder='Mobile Number' 
                        value={mobile} 
                        onChange={(e) => setMobile(e.target.value)} 
                        required 
                    />
                    
                    <p>E-mail</p> 
                    <input 
                        type="email" 
                        placeholder='Enter Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />

                    <button type='submit' disabled={loading}>
                        {loading ? 'Submitting...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}