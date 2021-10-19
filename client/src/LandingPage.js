import { useMousePosition } from './MousePosition';

const LandingPage = () => {     
    const position = useMousePosition()
    
    return (
        <div>
            <h1>Steve Vaughn</h1>
            <h1>{position.x <= position.innerWidth/2 ? 'Professional Musician' : 'Full Stack Software Engineer'}</h1>
        </div>
    )
}

export default LandingPage
