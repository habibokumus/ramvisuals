import React, { useState } from 'react'
import Image from 'next/image'
import { kgid } from 'kgid'

import Png1 from '../../public/images/welcome2.png'
import Png2 from '../../public/images/welcome3.png'
import Png4 from '../../public/images/welcome4.png'
import Button from '../elements/button'
import Custom_h1 from '../elements/custom-h1'
import Paragraph from '../elements/paragraph-p1'
import Popup from '../elements/popup'

export default function Porfolio() {
   const [selectUrl, setSelectUrl] = useState<string | null>()
   const [open, setOpen] = useState<boolean>(false)

   return (
      <>
         <section className="h-full bg-[#141516]">
            <Custom_h1 text="Atölye" className="py-20 text-center text-white" />
            <div className="flex flex-col px-6 px-6 md:px-[80px] xl:px-[150px]">
               {content.map((item) => {
                  return (
                     <div key={kgid()}>
                        {item.position === 'left' && (
                           <div className="flex flex-col items-center justify-between gap-6 py-10 md:gap-10 lg:flex-row">
                              <div className="order-last flex max-w-[441px] flex-col gap-6 lg:order-first">
                                 <h2 className="text-2xl font-semibold text-white lg:text-4xl">{item.title}</h2>
                                 <Paragraph text={item.description} className="text-white" />
                              </div>
                              <div onClick={() => setOpen(!open)}>
                                 <Image
                                    src={item.img}
                                    width={604}
                                    height={409}
                                    alt="image"
                                    className="transition duration-200 ease-in-out hover:scale-105"
                                    onClick={() => setSelectUrl(item.url)}
                                 />
                              </div>
                           </div>
                        )}
                        {item.position === 'right' && (
                           <div className="flex flex-col items-center justify-between gap-6 py-16 md:gap-10 lg:flex-row">
                              <div onClick={() => setOpen(!open)}>
                                 <Image
                                    src={item.img}
                                    width={570}
                                    height={399}
                                    alt="image"
                                    className="transition duration-200 ease-in-out hover:scale-105"
                                    onClick={() => setSelectUrl(item.url)}
                                 />
                              </div>
                              <div className="flex max-w-[441px] flex-col gap-6">
                                 <h2 className="text-2xl font-semibold text-white lg:text-4xl">{item.title}</h2>
                                 <Paragraph text={item.description} className="text-white" />
                              </div>
                           </div>
                        )}
                     </div>
                  )
               })}

               <div className="flex flex-col gap-10">
                  <div className="mx-auto w-full max-w-[900px]">
                     <Custom_h1 text={content[4].title} className="text-center text-white" />
                     <Paragraph text={content[4].description} className="pb-6 text-center text-white" />
                     <Button className="mx-auto w-fit" />
                  </div>
                  <div className="h-[60px]" />
                  <div onClick={() => setOpen(!open)} className="order-first md:order-last">
                     <Image
                        src={content[4].img}
                        width={809}
                        height={576}
                        alt="image"
                        className="mx-auto transition duration-200 ease-in-out hover:scale-105"
                        onClick={() => setSelectUrl(content[4].url)}
                     />
                  </div>
               </div>
            </div>
            <div className="h-[110px]" />
         </section>
         {selectUrl && <Popup open={open} setOpen={setOpen} url={selectUrl} />}
      </>
   )
}

const content = [
   {
      position: 'left',
      title: 'Film',
      description:
         'Yaratıcı ekibimizle birlikte,"Screenwriting", "Casting", "Yönetmenlik" ve "Kurgu" gibi bir dizi süreci titizlikle yöneterek;  beyazperde ve ekranlar için eşsiz ve etkileyici hikayeleri hayata geçiriyoruz. ',
      img: Png1,
      url: 'https://www.youtube.com/embed/e_oylI6fppA?si=MLI6vwR81CmZTDEU',
   },
   {
      position: 'right',
      title: 'Reklamcılık ve Ticari Projeler',
      description:
         'Özgün fikirleri, görsel estetikle birleştirerek, ticari reklam ve tanıtım projeleri ile Markanızın hikayesine hayat verirken sizlerin hedeflerinize ulaşmanıza destek oluyoruz. ',
      img: Png2,
      url: 'https://www.youtube.com/embed/XaiC1ic6DpI?si=5FSKlONBGYlc_A53',
   },
   {
      position: 'left',
      title: 'Belgesel Yapımı',
      description:
         'Gerçek hikayelere ve toplumsal konulara odaklanarak etkileyici belgeseller üretiyoruz. Deneyimli belgesel yapımcıları ve araştırmacılarımızla birlikte, izleyicilere derinlemesine keşifler ve ilham verici içerikler sunuyoruz.',
      img: Png1,
      url: 'https://www.youtube.com/embed/6U1p-Rvm_nA?si=xetlHQ-6o1z4qd8w',
   },
   {
      position: 'right',
      title: 'Post-Prodüksiyon Hizmetleri',
      description:
         'Filmlerin ve diğer medya ürünlerinin post-prodüksiyon süreçlerini yöneten uzman bir ekibiz; Editing, Visual Effects, Color correction, Color grading, Ses miksajı ve Exporting gibi hizmetler sunarak, projelerinizi benzersiz bir görsel estetiğe ve üstün kaliteyle tamamlıyoruz.',
      img: Png4,
      url: 'https://www.youtube.com/embed/EO2bY9hbtoA?si=rLqHFAVLDJkLKHp2',
   },
   {
      position: 'center',
      title: 'Dijital Medya İçerikleri',
      description:
         'Dijital platformlar için; web dizileri, kısa filmler, interaktif içerikler ve diğer dijital medya formatlarında özgün projeler geliştirerek, izleyicilere benzersiz deneyimler sunuyoruz.',
      img: Png4,
      url: 'https://www.youtube.com/embed/EO2bY9hbtoA?si=rLqHFAVLDJkLKHp2',
   },
]
