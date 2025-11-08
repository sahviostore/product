import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from './Navbar'
import { FeaturedCollection } from './Featured'
import { Product } from './Product'
import { Home } from './Home'
import { ProductDetail } from './ProductDetail';
import { About } from './About';
import { WhyUs, FAQ , Footer } from "./Sections";


const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
      <Route path="/" element={<>
            <Home />
            <About />
            <FeaturedCollection />
            <Product />
            <WhyUs />
            <FAQ />
        </>} />
        <Route path="/about" element={<About />} />
        {/* product listing page */}
  <Route path="/product" element={<Product />} />

  {/* single product detail */}
  <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App