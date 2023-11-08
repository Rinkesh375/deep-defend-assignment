import '../styles/threats.css';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { GiEdgedShield, GiEyeShield} from 'react-icons/gi';
import { Card } from '../components/Card';

const Threats = () => {

    const [viewState, setViewState] = useState(0);

    const springs = useSpring({
        from: { y: 100 },
        to: { y: 0 },
    })

    const alerts = [
        { type: 'Endpoint Security', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Data Exfiltration', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Email Gateway', system: 'Android-gh67', date: new Date().toISOString(), icon: <GiEyeShield /> },
        { type: 'Endpoint Security', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Data Exfiltration', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Email Gateway', system: 'Android-gh67', date: new Date().toISOString(), icon: <GiEyeShield /> },
        { type: 'Endpoint Security', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Data Exfiltration', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Email Gateway', system: 'Android-gh67', date: new Date().toISOString(), icon: <GiEyeShield /> },
        { type: 'Endpoint Security', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Data Exfiltration', system: 'Desktop-4568', date: new Date().toISOString(), icon: <GiEdgedShield /> },
        { type: 'Email Gateway', system: 'Android-gh67', date: new Date().toISOString(), icon: <GiEyeShield /> }
    ]



    return (
        <animated.div className='threats' style={springs}>
            <div className='summery'>
                <div className='score_circle'>
                    <div className='circle'>
                        <h1> <span style={{ color: "var(--accent_color)" }}> 65 </span> / 100 </h1>

                        <hr style={{ width: '50%', margin: 0 }} />

                        <p> Overall Score </p>

                        <h2> Cymulate </h2>
                    </div>
                </div>
            </div>

            <div className='side_items'>
                <div className='options'>
                    <div className={viewState === 0 && 'selected'} onClick={() => setViewState(0)}>
                        Alerts
                    </div>

                </div>

                <div className='show'>

                    {
                         alerts.map((item, index) => {
                            return <Card data={item} key={index} />
                        })
                    }
                       
                    

                </div>
            </div>
        </animated.div>
    )
}

export default Threats;
