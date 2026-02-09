import "./Contact.css"
import Container from '../Container'
import Heading from '../Common/Heading'
import { FaEnvelope } from 'react-icons/fa'
import { useThemeContext } from "../../AppContext"
// "react": "^19.1.0",
    // "react-dom": "^19.1.0",

const Contact = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <Container className={`contact-section ${isDarkMode && 'bg-dark-contact-section'} py-5`}>
            <div id="contact" className='row justify-content-center align-items-center py-md-4'>

                <div className="col-md-6">
                    <div className='text-center'>
                        <div className="lh-sm">
                            <Heading text={"Have an Awesome Project Idea?"} subText={"Let’s Discuss."} color={`${isDarkMode ? '#fff' : '#333'}`} />
                        </div>

                        <div className='mt-4'>
                            <div className={`contact-input ${isDarkMode && 'bg-dark-contact-input'} shadow-sm`}>
                                <div className={`envelope ${isDarkMode && 'bg-black'}`}><FaEnvelope /></div>
                                <div className="input">
                                    <input type="text" placeholder='Enter Email Address..' />
                                </div>
                                <div>
                                    <button>Send </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact
