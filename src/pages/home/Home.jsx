import { React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./home.css"
import { hero_img1, hero_img2, hero_img3, hero_img4,  innovation1, innovation2, update1, update2, update3, update4, update5, Lpatents1,Lpatents2,Lpatents3,Lpatents4, } from '../../images/Images'
import Navbar from '../../components/navbar/Navbar'
import ReasearchBanner from '../../components/research_banner/ReasearchBanner'
import DeanMsg from '../../components/DeanMsg/DeanMsg'
import Card from '../../components/cards/Card'
import Footer from '../../components/footer/Footer'
import CountUp from 'react-countup';


const useImageSlider = (imageList, intervalTime) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [imageList.length, intervalTime]);

  return currentImage;
};
function Home() {
  // hero section background images animation
  const hero_images = [hero_img1, hero_img2, hero_img3, hero_img4];
  const intervalTime = 5000;
  const currentImage = useImageSlider(hero_images, intervalTime);
  const number_card = [
    {
      id: 1,
      title: '1000',
      desc: 'Patents'
    },
    {
      id: 2,
      title: '500',
      desc: 'Published'
    },
    {
      id: 3,
      title: '60',
      desc: 'Ongoing Funded Projects'
    },
    {
      id: 4,
      title: '40',
      desc: 'Investors'
    }
  ];
  return (
    <>
      <header>
        <Navbar />
        <section id='hero-section' className='position-relative '>
          <div className='hero_container d-flex align-items-center'>
            <div className="head-text position-absolute z-1 ms-0 text-center text-md-start ms-md-5 ">
              <h1 className='hd-color' data-aos='fade-right'>Research, Innovation and Entrepreneurship</h1>
            </div>
            <div className="banner position-relative w-100 overflow-hidden">
              <div className="image position-relative h-100 " style={{ backgroundImage: `url(${hero_images[currentImage]})`}} />
            </div>
          </div>
          <div className="bottom-cards w-auto"  data-aos='fade' data-aos-offset="120">
            <div className="d-grid justify-content-center card-sm">
              {
                number_card.map((item, index) => {
                  return (
                    <div className="col d-flex justify-content-center " key={index} >
                      <div className="card card-container rounded-4 ">
                        <div className="card-body">
                        <h1>
                        <CountUp start={0} end={item.title} duration={2} delay={1} redraw={false} decimals={0} />
                        +
                        </h1>
                          <p className="card-text fw-medium">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </header>
      <main className="main">
        <LatestPatents />
        
        <div className=" container-fluid mb-custom ">
          <div className="row p-2 p-sm-5 d-flex justify-content-center ">
            <div className="col-xl-6 col-lg-6 col-md-12 p-1 innovation-images d-flex w-50 position-relative align-items-center justify-content-around gap-2 " >
              <img src={innovation1} loading='lazy' alt="responsive webite" className="w-50 object-fit-cover rounded-3" data-aos='fade-up' />
              <img src={innovation2} loading='lazy' alt="responsive webite" className="w-50 object-fit-cover  rounded-3 position-relative " data-aos='fade-down' style={{ top: '-20px', right: '0' }} />
              {/* <div className="image position-relative h-100 " style={{ backgroundImage: `url(${innovation_images[current_innovation_img]})` }} /> */}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 pt-1 ps-md-5 text-center mt-3 mt-lg-0" data-aos='fade' >
              <h2 className='lh-base text-lg-start fs-2'>Innovation And Entrepreneurship</h2>
              <p className='justify'>
              Welcome to the heart of Innovation and Entrepreneurship at Bit Mesra, where the spirit of innovation thrives and entrepreneurial dreams take flight. We believe that the most powerful ideas are born when knowledge meets passion, and we are committed to fostering an environment that ignites your creative spark and empowers you to turn your ideas into impactful ventures. At Bit Mesra, we provide a dynamic ecosystem that nurtures innovation, offering state-of-the-art facilities, cutting-edge research opportunities, and a network of industry connections to support your entrepreneurial journey. Our renowned faculty, comprised of accomplished experts and industry leaders, are dedicated to guiding and mentoring you along the way. Through tailored programs, workshops, and mentorship initiatives, we equip you with the skills, knowledge, and resources necessary to thrive in the world of entrepreneurship. From ideation to commercialization, we celebrate diversity of thought and encourage interdisciplinary collaborations, creating an environment where breakthroughs happen. Join our vibrant community of forward-thinking innovators, where you will connect with like-minded individuals, engage in transformative projects, and access funding and investment opportunities to bring your entrepreneurial vision to life. At Bit Mesra, we believe that innovation has the power to change lives and shape the future. Unleash your potential and become part of a legacy of innovation and entrepreneurship that transcends boundaries. Together, let's redefine what's possible.
                </p>
                <Link to='/Innov_Enter' className="btn btn-primary px-5 mb-3 float-sm-end fs-6 ">Read More </Link>
            </div>
          </div>
        </div>

        <ReasearchBanner FundedReasearchNumber='15' DeptReasearchNumber='20' />
        
        <DeanMsg />
        <RecentUpdates />
      </main>
      <Footer />
    </>
  )
}
export function LatestPatents() {
  const card_items = [
    {
      id: 1,
      title: 'Microstrip antenna ',
      desc: 'World’s smallest UWB antenna for short-range high- speed communications with the objective of freeing people from wires.',
      img: Lpatents1,
      alt: 'card-alternative'
    },
    {
      id: 2,
      title: 'Gallbladder stone ',
      desc: 'Research in the area of gallbladder stone formation and their subsequent characterization',
      img: Lpatents2,
      alt: 'card-alternative'
    },
    {
      id: 3,
      title: 'Enhancing Antioxidant',
      desc: 'Antioxidant Composition containing microspheres from extract of Lagenaria siceraria fruits.',
      img: Lpatents3,
      alt: 'card-alternative'
    },
    {
      id: 4,
      title: 'Reusable Vehicles',
      desc: 'Aerodynamic Characterization of Reusable Launch Vehicles at Low Speeds RESPOND ISRO (22.39 Lakhs)',
      img: Lpatents4,
      alt: 'card-alternative'
    }
  ];
  return (
    <div className="">
    <div data-aos='fade-down'>
      <h2 className="text-center hd-color myText" >
        Latest Patents
      </h2>
      <div className="container d-flex justify-content-center align-items-center position-relative" >
        <span className="line"></span>
        <span className="star fa fa-star checked"></span>
        <span className="line"></span>
      </div>
      </div>
      <div className="cardGroup d-flex justify-content-center px-4 overflow-x-scroll " data-aos='fade-up'>
        {card_items.map((item, index) => (
         <Card
         key={index}
         image={item.img}
         alt={item.alt}
         title={item.title}
         desc={item.desc}
         readMoreLinkStyle={{ visibility: "hidden"}} // Set the style object as needed
         style={{ height: '20rem'}} // Set the style object as needed
     />
     
      

        ))}
      </div>
    </div>
  );
}

export function RecentUpdates() {
  const update_items = [
    {
      id: 1,
      title: 'PURSE Grant',
      desc: 'BIT Mesra has been awarded the prestigious DST (Department of Science and Technology) recognition, signifying its excellence in research and innovation',
      img: update1,
      alt: 'card-alternative'
    },
    {
      id: 2,
      title: 'Chemical Engineering ICMR Sponsored',
      desc: 'Designing and developing affordable technology for micronutrient and protein-fortified whole grain puffed rice.',
      img: update2,
      alt: 'card-alternative'
    },
    {
      id: 3,
      title: 'Isro Funded Project',
      desc: `The VLSI Design Lab, collaborating with ISRO, embarked on an ambitious project to advance VLSI design ,developing cutting-edge solutions for space-based electronic systems.`,
        img: update3,
      alt: 'card-alternative'
    },
    {
      id: 4,
      title: 'Production Engineering',
      desc: 'The award-winning project by production engineering students focused on optimizing energy efficiency in manufacturing processes. ',
      img: update4,
      alt: 'card-alternative'
    },
    {
      id: 5,
      title: 'Open-ended EPSRC ',
      desc: 'Dr. Srikanta Pal, in an open-ended EPSRC research project to help astronomers of Jodrell Bank Telescope (JBT), UK, to capture lunar signal for the study of ice craters.',
      img: update5,
      alt: 'card-alternative'
    }
  ];
  return (
    <div id='recentUpdates'>
    <div data-aos='fade-down'>
      <h2 className="text-center hd-color myText  ">
        Recent Updates
      </h2>
      <div className="container d-flex justify-content-center align-items-center position-relative  ">
        <span className="line"></span>
        <span className="star fa fa-star checked"></span>
        <span className="line "></span>
      </div>
      </div>
      <div className="cardGroup d-flex px-4 overflow-x-scroll " data-aos='fade-up'>
        {update_items.map((item, index) => (
          <Card
            key={index}
            image={item.img}
            alt={item.alt}
            title={item.title}
            desc={item.desc}
            style={{ background: "var(--card-color1)", border: "none", padding: "0" }}
            readMoreLinkStyle={{ visibility: "hidden", margin:"-20px"}}
            
          />

        ))}
      </div>
    </div>
  );
}

export default Home