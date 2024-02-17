import React from 'react'
import Layout from '@/~components/layout'
import ClientSay from '@/~components/section/client-say'
import Porfolio from '@/~components/section/porfolio'
import Services from '@/~components/section/services'
import Welcome from '@/~components/section/welcome'

export default function LandingPage() {
   return (
      <Layout>
         <Welcome />
         <Services />
         <Porfolio />
         <ClientSay />
      </Layout>
   )
}
