import whatsappIcon from '../assets/img-whatsapp.png';

import '../styles/whatsappBtn.css';

export default function WhatsappBtn(){
    return(
        <div className="btn-whatsapp">
            <img src={whatsappIcon} alt="WhatsApp" />
        </div>
    );
}