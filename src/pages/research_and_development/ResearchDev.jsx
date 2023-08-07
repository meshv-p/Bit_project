import { React, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import { researchNdev_img, patents1, patents2, patent3, patents4, arch,rocket,remote,Mech,bio,prod,chem,pharm,phy,chemestrycard,mathcard,} from '../../images/Images.js'
import Card from '../../components/cards/Card'
import PaginationComponent from '../../components/pagination/PaginationComponent'
import Footer from '../../components/footer/Footer'

function ResearchDev() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const card_items = [
    {
      id: 1,
      title: 'Computer Science and Enginerring',
      desc: 'Established in 1983, the Department of Computer Science & Engineering is now a leading institution with top-notch infrastructure and facilities.',
      img: patents1,
      alt: 'card-alternative',
      link:'/cse'
    },
    {
      id: 2,
      title: 'Electrical and Communica- tion Engineering',
      desc: 'The Department of Electronics and Communication Engineering is one of largest departments of institute with largest student and faculty strength.',
      img: patents2,
      alt: 'card-alternative',
      link:'/ece'
    },
    {
      id: 3,
      title: 'Electrical & Electronics Engineering',
      desc: 'The Department of Electrical & Electronics Engineering focuses on industry-driven programs with adaptable curriculum catering.',
      img: patent3,
      alt: 'card-alternative',
      link:'/eee'
    },
    {
      id: 4,
      title: 'Civil and Enviornmental Engineering',
      desc: 'The Department of Civil Engineering was established in 1957. It was renamed as Department of Civil and Environmental Engineering in 2014..',
      img: patents4,
      alt: 'card-alternative',
      link:'/civil'
    },
    {
      id: 5,
      title: 'Architecture and Planning Department ',
      desc: 'Established in 1993 at BIT Mesra, the Architecture & Planning Department focuses on designing spaces and enriching the built environment.',
      img: arch ,
      alt: 'card-alternative',
      link:'/architecture_planning'
    },
    {
      id: 6,
      title: 'Space Engineering and Rocketry',
      desc: 'Founded in 1964, the first-of-its-kind department trains scientists and engineers in Aerospace Engineering and Rocket Technologies.',
      img: rocket,
      alt: 'card-alternative',
      link:'/rocketry'
    },
    {
      id: 7,
      title: 'Remote Sensing',
      desc: 'Department of Remote Sensing was established in 1997 with an aim to meet the increasing demand for qualified manpower in this rapidly developing field.',
      img: remote,
      alt: 'card-alternative',
      link:'/remote_sensing'
    },
    {
      id: 8,
      title: 'Bio Engineering and Bio-Technology',
      desc: `Department of Biotechnology was established in 2002.`,
      img: bio,
      alt: 'card-alternative',
      link:'/Bio'
    },
    {
      id: 9,
      title: 'Mechanical Engineering',
      desc: `The Mechanical Engineering program at BIT Mesra typically covers a wide range of subjects, including: Thermodynamics, Fluid Mechanics, Heat Transfer,
      Solid Mechanics etc,`,
      img: Mech,
      alt: 'card-alternative',
      link:'/mechnical_engineering'
    },
    {
      id: 10,
      title: 'Production and Industrial Engineering',
      desc: `Production and Industrial Engineering has been establishment in 1964.`,
      img: prod,
      alt: 'card-alternative',
      link:'/production_Industrial_engineering'
    },
    {
      id: 11,
      title: 'Chemical Engineering',
      desc: `The Department was established in 1994 as Polymer Engineering and is renamed in 2011.`,
      img: chem,
      alt: 'card-alternative',
      link:'/chemical_Enginerring'
    },
    {
      id: 12,
      title: 'Pharmaceutical Sciences and Technology',
      desc: `The Department was established  Golden Jubilee  year in 1972.`,
      img: pharm,
      alt: 'card-alternative',
      link:'/pharmaceutical_Science_and_technology'
    },
    {
      id: 13,
      title: 'Physics Department',
      desc: `The Department (previously known as Department of Applied Physics) was established in 1955.`,
      img: phy,
      alt: 'card-alternative',
      link:'/physicsDepartment'
    },
    {
      id: 14,
      title: 'Chemistry Department',
      desc: `Department of Chemistry was established in 1955, offers UG, PG & Ph.D. programmes in chemistry.`,
      img: chemestrycard,
      alt: 'card-alternative',
      link:'/chemistry_departments'
    },
    {
      id: 15,
      title: 'Mathematics Department',
      desc: `The Department of Mathematics was founded in 1956 under the name Department of Applied Mathematics.`,
      img: mathcard,
      alt: 'card-alternative',
      link:'/mathematics_department'
    },
  
  ];

  const entriesPerPage = 6;
  const totalPages = Math.ceil(card_items.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleEntries = card_items.slice(startIndex, endIndex);
  return (
    <>
      <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={researchNdev_img} title="Research And Development" class='jumbo-head' />
      <div className="container mt-5">
        <h2 className="text-center hd-color myText  ">
          Research Domains
        </h2>
        <div className="container d-flex justify-content-center align-items-center position-relative  ">
          <span className="line d-inline-block"></span>
          <span className="star fa fa-star d-inline-block checked"></span>
          <span className="line d-inline-block"></span>
        </div>
      </div>
      <article className='container text-lg-center justify  mt-5 fs-4' style={{ color: 'var(--head-color)' }}>Discover a tapestry of research areas that weave together in harmony, illuminating new possibilities and shaping the future. Dive deep into our research initiatives and explore the vibrant mosaic of projects that have the power to shape the world we live in.</article>
      <div className="container">
        <div className="row gy-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">

          {visibleEntries.map((item, index) => (
            <Card
              key={index}
              image={item.img}
              alt={item.alt}
              title={item.title}
              desc={item.desc}
              title_style={{ fontSize: '17px' }}
              link={item.link}
              readMoreLinkStyle={{ marginTop:"10px"}}
            />

          ))}
        </div>

      </div>
      <div className="d-flex flex-column align-items-center my-5">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <Footer />

    </>
  )
}

export default ResearchDev