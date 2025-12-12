import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import banar2 from '../../assets/images/banner12.webp';
import banar1 from '../../assets/images/banner13.webp';
import banar3 from '../../assets/images/banner14.webp';
import Container from '../Shared/Container';

const Banner = () => {
  return (
    <Container>
      <div className="md:mt-2">
        <Carousel infiniteLoop={true} autoPlay={true}>
          <div>
            <img src={banar1} />
            <p className=""></p>
          </div>
          <div>
            <img src={banar2} />
            <p className=""></p>
          </div>
          <div>
            <img src={banar3} />
            <p className=""></p>
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Banner;
