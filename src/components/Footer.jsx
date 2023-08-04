import digitalApesLogoSVG from '../assets/images/digitalapes_logo_svg.svg'

// Importing Atoms
import {SocialLinks} from './Atoms/SocialLinks'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div className="w-full py-12 bg-slate-100">
            <div className="container flex flex-col items-center gap-7">
                <img src={digitalApesLogoSVG} alt="DigitalApes logo" className="w-56" />

                <div className="flex items-center  flex-col md:flex-row gap-4">
                    <div className="flex items-center gap-2 text-slate-900">
                        <span className="text-slate-700"><FontAwesomeIcon icon={faPhone} /></span>
                        <a className='hover:underline' href="tel:+918769342067">+91 8769342067</a>
                    </div>

                    <div className="bg-slate-200 hidden md:block" style={{ width: '1px', height: '18px' }}></div>

                    <div className="flex items-center gap-2 text-slate-900">
                        <span className="text-slate-700"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <a className='hover:underline' href="mailto:contact@digitalapes.co">contact@digitalapes.co</a>
                    </div>

                    <div className="bg-slate-200 hidden md:block" style={{ width: '1px', height: '18px' }}></div>

                    <SocialLinks />
                </div>

                <div className=" text-xs text-slate-400">© 2023 DigitalApes. All rights reserved.</div>
            </div>
        </div>
    )
}
