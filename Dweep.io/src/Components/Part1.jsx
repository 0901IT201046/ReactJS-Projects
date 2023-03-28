import React from 'react';

const Part1 = () => {
  return (
    <div className='section1'>
        <h2>An inspiring design delivered to your inbox every morning</h2>
        <p>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>

        <h3>Show me how it looks</h3>

        <div className='register'>
            <input type='text' id='text' placeholder='Your e-mail address' />
            <button>Register Now</button>
        </div>

        <p id='white-text'>Free - No Spam - No Data Sharing</p>
    </div>
  )
}

export default Part1;