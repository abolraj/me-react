import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands'         
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
    
export default function Footer({ ...props }) {     
    const {t} = useTranslation()
    return (    
        <footer className="p-5 flex justify-center items-center flex-col">  
            <div className="mb-4">      
                <p className="text-lg text-base-content"> 
                    {t('footer.text')}  
                </p>        
            </div>       
        </footer>
    );
}
