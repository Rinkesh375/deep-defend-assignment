// Import custom styles for the Home component
import '../styles/home.css';

// Import custom components for the Home page
import { SecurityScore } from '../components/SecurityScore';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Showcase } from '../components/Showcase';
import { animated, useSpring } from '@react-spring/web';

// Define the Home component, showcasing security-related data
const Home = () => {
    // Define some example high-risk scenarios specific to our application
    const high_risks = [
        '(22)- On-Prem Risk | Workstation > DC',
        '(24)- AWS - Public EC2 to Sensitive Data S3',
        '(24) - Azure External Users > Azure Customers'
    ];

    // Create a smooth animation effect for an engaging user experience
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
                {/* Display scenarios at high risk */}
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

                {/* Reveal critical assets at risk */}
                <Showcase heading={'Critical assets at risk'}>
                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                    <div>
                        {high_risks.map((risk, id) => (
                            <div className='high_risk' key={id}>
                                <div>
                                   
                                </div>

                                <p> {risk} </p>

                                <div>
                                    Take Precaution
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div>
                        478
                    </div> */}

                    </div>
                </Showcase>

                {/* Present top choke points for enhanced security */}
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


