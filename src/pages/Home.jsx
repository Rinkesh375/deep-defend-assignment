
import '../styles/home.css';

import { SecurityScore } from '../components/SecurityScore';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Showcase } from '../components/Showcase';
import { animated, useSpring } from '@react-spring/web';


const Home = () => {
   
    const high_risks = [
        '(22)- On-Prem Risk | Workstation > DC',
        '(24)- AWS - Public EC2 to Sensitive Data S3',
        '(24) - Azure External Users > Azure Customers'
    ];

    const springs = useSpring({
        from: { y: 100 },
        to: { y: 0 },
    });

    return (
        <animated.div style={springs}>
            <SecurityScore />

            <div className='choose'>
                <p> Filter by Time Period <span> <MdKeyboardArrowDown /> </span>  </p>
                <p> Filter by Data Type <span> <MdKeyboardArrowDown /> </span>  </p>
            </div>

            <div className='scenario_grid'>
            
                <Showcase heading={'Scenarios at high risk'}>
                    <div>
                        {high_risks.map((risk, idx) => (
                            <div className='high_risk' key={idx}>
                                <div>
                        
                                </div>

                                <p> {risk} </p>

                                <div>
                                    Take Action
                                </div>
                            </div>
                        ))}
                    </div>
                </Showcase>

          
                <Showcase heading={'Critical assets at risk'}>
                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                    <div>
                        {high_risks.map((risk, id) => (
                            <div className='high_risk' key={id}>
                                <div>
                                   </div>
                                <p> {risk} </p>
                                </div>
                        ))}
                    </div>
                    <div className='circle' style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100px",width:"100px",borderRadius:"50%",textAlign:"center"}}>
                       <div> 478</div>
                    </div>

                    </div>
                </Showcase>


                <Showcase heading={'Top choke points'}>
                    <div>
                        {high_risks.map((risk, id) => (
                            <div className='high_risk' key={id}>
                                <div>
                         
                                </div>

                                <p> {risk} </p>

                                <div>
                                    Optimize Security
                                </div>
                            </div>
                        ))}
                    </div>
                </Showcase>

             
                <Showcase heading={'Top impacting attack techniques'}>
                    <div>
                        {high_risks.map((risk, idx) => (
                            <div className='high_risk' key={idx}>
                                <div>
                             
                                </div>

                                <p> {risk} </p>

                                <div>
                                    Countermeasure
                                </div>
                            </div>
                        ))}
                    </div>
                </Showcase>
            </div>
        </animated.div>
    );
};

export default Home;


