import React from 'react'

const Footer=()=>{

    const year = new Date().getFullYear();

    return (<>
        <footer className="w-100 bg-light text-center">
            <p><span role="img" aria-label="" aria-labelledby="">©️</span> {year} Deep's services.All rightreserved | Terms and conditions apply</p>
        </footer>
    </>);
}

export default Footer;