import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands'         
import { faHeart } from '@fortawesome/free-solid-svg-icons'
    
export default function Footer({ ...props }) {     
    return (    
        <footer className="p-5 flex justify-center items-center flex-col">  
            <div className="mb-4">      
                <p className="text-lg">   
                    2025 &copy; Developed and designed with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by me
                </p>        
            </div>       
        </footer>
    );
}
