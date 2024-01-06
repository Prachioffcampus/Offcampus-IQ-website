import Image from 'next/image';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Section from './components/Section';
// import TopAsked from './components/TopAsked';
import Blog from './components/Blog';



export default function Home() {
  return (
  <>
  <Hero/>
  <Hero2/>
  <Section/>

  {/* <TopAsked/> */}
  <Blog/>
  </>
  )
}
