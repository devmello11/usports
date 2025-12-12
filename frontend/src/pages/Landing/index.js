import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../styles/landing.css';

export default function Landing() {

    const formRef = useRef(null);
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Verificando chaves:", process.env.REACT_APP_PUBLIC_KEY);
        setStatus('Enviando...');

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(
                (result) => {
                    setStatus("Mensagem enviada com sucesso!");
                    formRef.current.reset();
                    setTimeout(() => setStatus(""), 5000);
                },
                (error) => {
                    console.error("Erro do EmailJS:", error.text);
                    setStatus(`Ocorreu um erro ao enviar. Tente novamente.`);
                }
            );
    };

    return (
        <section className='landing-section'>
            <div className='form-container'>
                <h1>Formulário de Contato</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label>Nome da escola</label>
                    <input name='escola' placeholder='Digite o nome da escola' required />

                    <label>Cidade/Estado</label>
                    <input name='cidade' placeholder='Cidade - UF' required />

                    <label>Nome do Responsável</label>
                    <input name='responsavel' placeholder='Digite o nome do Responsável' required />

                    <label>E-mail</label>
                    <input type="email" name='email' placeholder='email@email.com' required />

                    <label>WhatsApp</label>
                    <input name='whatsapp' placeholder='(00) 0 0000-0000' required />

                    <label>Número de alunos</label>
                    <input type="number" name='quantidade' placeholder='Digite a quantidade de alunos' required />

                    <label>Mensagem (opcional)</label>
                    <textarea name='mensagem' placeholder='ex: "Gostaria de agendar uma reunião virtual"' rows="4"></textarea>

                    <button type='submit' disabled={status === 'Enviando...'}>
                        {status === 'Enviando...' ? 'Enviando...' : 'Enviar'}
                    </button>
                    
                    {status && <p className="status-message">{status}</p>}
                </form>
            </div>
        </section>
    );
}