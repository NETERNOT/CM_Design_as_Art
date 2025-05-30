import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css'; // Import your CSS styles
import Button from '../../Button/Button';
import signalVideo from '../../assets/signaltutorial.mp4';
import sortingVideo from '../../assets/sortingtutorial.mp4';
import memoryVideo from '../../assets/memorytutorial.mp4';

// Define the possible types
type TutorialType = 'memory' | 'sorting' | 'signal';

// Define the props interface
interface TutorialPageProps {
  type: TutorialType;
}

const TutorialPage: React.FC<TutorialPageProps> = ({ type }) => {
  // Configuration for each tutorial type
  const tutorialConfigs = {
    signal: {
      videoSrc: signalVideo,
      title: 'Signals Game',
      description: 'Match the symbols to their meanings',
      buttonText: 'Start',
      buttonLink: '/signal',
    },
    sorting: {
      videoSrc: sortingVideo,
      title: 'Sorting Game',
      description: 'Drag and drop the chairs to arrange them in the correct order based on the categories that appear above. You can also create yout own categories with custom sets of chairs in the explore more section',
      buttonText: 'Start',
      buttonLink: '/sorting',
    },
    memory: {
      videoSrc: memoryVideo,
      title: 'Memory Game',
      description: 'Memorize the faces that have appeared on the screen and identify the new ones',
      buttonText: 'Start',
      buttonLink: '/memory',
    },
  };

  // Get the current configuration based on type
  const config = tutorialConfigs[type];

  return (
    <div className={`tutorial-page tutorial-${type}`}>
      <div className="video-container">
        <video 
          src={config.videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="tutorial-video"
        />
      </div>
      
      <div className="text-content">
        <h1>{config.title}</h1>
        <p>{config.description}</p>
        
        <Link 
          to={config.buttonLink}
        >
          <Button label={config.buttonText}></Button>
        </Link>
      </div>

      <div className="back">
        <Link to="/">
          <svg
            width="380"
            height="521"
            viewBox="0 0 380 521"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M265.476 483.612C260.979 499.198 257.748 510.476 254.898 520.359C217.968 522.577 3.79931 301.14 -0.000678811 256.219C41.2993 165.173 167.292 67.9194 239.125 -0.000551825C250.97 9.37646 260.219 16.6624 267.82 22.6814C261.929 127.666 82.6003 164.793 80.1303 268.194C148.289 337.127 207.262 405.871 265.413 483.612L265.476 483.612Z"
              fill="black"
            />
            <path
              d="M373.163 62.3454C374.81 71.2164 377.027 82.6834 379.117 93.7074C333.889 160.487 251.224 185.64 210.493 255.017C243.623 332.504 384.882 397.89 352.829 490.139C305.384 500.974 156.587 284.352 134.733 250.012C154.623 207.182 320.143 36.3054 373.163 62.2824L373.163 62.3454Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TutorialPage;