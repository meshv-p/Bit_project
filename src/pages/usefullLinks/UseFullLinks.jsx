import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { researchNdev_img } from '../../images/Images';
const links=[
    {
      Sno: "1",
      Name: "Industry-Academia Interaction – SIME, BIT Mesra",
      Links: "https://simebitmesra.com/index.html"
    },
    {
      Sno: "2",
      Name: "India 2030: Exploring the Future Research",
      Links: "https://www.cbre.co.in/en/research-reports/India-2030---Exploring-the-future"
    },
    {
      Sno: "3",
      Name: "British Council: Future Skills in India",
      Links: "https://www.britishcouncil.in/sites/default/files/future_skills_in_india_foundation_report_march2018.pdf"
    },
    {
      Sno: "4",
      Name: "The Winning Leap: Future of India (PriceWaterhouseCoopers)",
      Links: "https://www.pwc.in/assets/pdfs/future-of-india/future-of-india-the-winning-leap.pdf"
    },
    {
      Sno: "5",
      Name: "Leadership Talks from Experts",
      Links: "https://mic.gov.in/leadership-talk/iflts_past"
    },
    {
      Sno: "6",
      Name: "Means to a Beginning – Funding opportunities for PhD Students and Postdocs in India",
      Links: "https://indiabioscience.org/publications/means-to-a-beginning-funding-opportunities-for-phd-students-and-postdocs-in-india"
    },
    {
      Sno: "7",
      Name: "Disha: A Career Resource Book for Life Science and Biotechnology Students",
      Links: "https://indiabioscience.org/publications/disha-a-career-resource-book-for-life-science-and-biotechnology-students"
    },
    {
      Sno: "8",
      Name: "Careers in Indian Science",
      Links: "https://indiabioscience.org/publications/careers-in-indian-science"
    },
    {
      Sno: "9",
      Name: "Interesting Researches from Canadian Science Publishing",
      Links: "https://blog.cdnsciencepub.com/pillar/forum/"
    },
    {
      Sno: "10",
      Name: "JOYI: Journey of a Young Investigator",
      Links: "https://indiabioscience.org/publications/joyi-journey-of-a-young-investigator-2020-edition"
    },
    {
      Sno: "11",
      Name: "Deep Tech Startup Stories from IIT-Madras",
      Links: "http://www.incubation.iitm.ac.in/portfolio"
    },
    {
      Sno: "12",
      Name: "Startups from IIT Bombay",
      Links: "https://www.ecell.in/startupportal/"
    },
    {
      Sno: "13",
      Name: "Useful Information for First Time Entrepreneurs",
      Links: "https://entrepreneurshipseriesiitm.blogspot.com/"
    },
    {
      Sno: "14",
      Name: "Visit International Industry – Virtual Industry Visit",
      Links: "https://www.virtually-anywhere.com/industrial-virtual-tours/"
    },
    {
      Sno: "15",
      Name: "English Communication for Scientists – SciTable",
      Links: "https://www.nature.com/scitable/ebooks/english-communication-for-scientists-14053993/contents/"
    },
    {
      Sno: "16",
      Name: "Eklavya – Spicing up the curriculum -Nurturing Creativity",
      Links: "https://eklavya.iitgandhinagar.ac.in/home/course/eklavya/1"
    }

  ]

export default function UseFullLinks() {
  return (
    <>
        <Navbar navBg="var(--bg-color)" />
      <Jumbotron img={researchNdev_img} title="Useful Links" class='jumbo-head' />
      <div className="container " data-aos='fade-up' data-aos-offset="10">
          <h2 className="text-center hd-color myText  ">
          Useful Links
          </h2>
          <div className="container d-flex justify-content-center align-items-center position-relative  ">
            <span className="line d-inline-block"></span>
            <span className="star fa fa-star d-inline-block checked"></span>
            <span className="line d-inline-block"></span>
          </div>
        </div>
       
        <div className="outer-card-element container  text-light rounded-3 my-2 p-4 " data-aos='fade-up' data-aos-offset="10" style={{ backgroundColor: "var(--head-color)" }}>
        <div className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
        <h4 className='fw-semibold text-highlighter'>Useful Link for Research Scholars and faculty</h4>
      <article className='fw-light'>
        <ul className='justify ' >
          {links.map((link) => (
            <li key={link.Sno} className='mb-2 ' style={{ fontSize: '18px' }}>
              {/* Updated the style here to increase font size */}
              <Link to={link.Links}  target='_blank' style={{ textDecoration: 'none' }}>
                {/* Updated the style here to remove the underline */}
                {link.Name}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>

    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Links for Improving Research Writing Skills</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                              <li>
                            <Link to="https://orsp.umich.edu/proposal-writers-guide-overview" target='_blank' style={{ textDecoration: 'none' }}>
                {/* Updated the style here to remove the underline */}
                Proposal Writer’s Guide 
              </Link>
              </li>
                              <li>
                            <Link to="https://www.ssrc.org/publications/the-art-of-writing-proposals/" target='_blank' style={{ textDecoration: 'none' }}>
                {/* Updated the style here to remove the underline */}
                Art of Writing Proposals
              </Link>
              </li>
                                 </ol>
                        </article>
                    </div>
    <div  className='my-4 repeating-reverse-gradient p-2' data-aos='fade-right' data-aos-offset="50">
                        <h4 className='fw-semibold text-highlighter'>Glory of India’s Science, Scientists and Lots of Videos</h4>
                        <article className='fw-light'>
                            <ol className='justify'>
                              <li>
                            <Link to="https://www.indiascience.in/videos/inspirational-scientists-homage-to-the-founders-of-indian-science" target='_blank' style={{ textDecoration: 'none' }}>
                {/* Updated the style here to remove the underline */}
                India Science Link
              </Link>
              </li>
                                </ol>
                        </article>
                    </div>
</div>
      <Footer/>
    </>
  )
}
