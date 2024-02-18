import React from 'react'
import Layout from '@/~components/layout'
import Porfolio from '@/~components/section/porfolio'
import Services from '@/~components/section/services'
import Testimonial from '@/~components/section/testimonial'
import Welcome from '@/~components/section/welcome'

export default function LandingPage() {
   return (
      <Layout>
         <Welcome />
         <Services />
         <Porfolio />
         <Testimonial />
      </Layout>
   )
}
