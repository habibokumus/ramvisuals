import React from 'react'
import { IconAd2, IconDeer, IconPhotoVideo, IconUpload, IconUserScan, IconVideo } from '@tabler/icons-react'

import Custom_h1 from '../elements/custom-h1'
import Paragraph from '../elements/paragraph-p1'

export default function Services() {
   return (
      <section className="relative z-30 h-full px-[150px]">
         <div className="h-[107px]" />
         <div className="mx-auto w-full max-w-[528px]">
            <Custom_h1 text="Atölyemizi Keşfedin" className="text-center" />
            <Paragraph text="Entegre Medya ve Danışmanlık Hizmetleri" className="text-center" />
         </div>
         <div className="grid grid-cols-3 gap-[115px] pt-[50px]">
            {Content.map((item, idx) => {
               return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={idx} className="col-span-1 flex flex-col gap-4">
                     <div className="flex flex-row items-center gap-3">
                        {item.icon}
                        <span className="text-[18px] font-semibold">{item.title}</span>
                     </div>
                     <Paragraph text={item.description} />
                  </div>
               )
            })}
         </div>
         <div className="h-[107px]" />
      </section>
   )
}

const Content = [
   {
      icon: <IconVideo className="text-[#006AFF]" />,
      title: 'Film',
      description: 'Beyazperde, Televizyon, Streaming Platformları, Film Festivalleri',
   },
   {
      icon: <IconDeer className="text-[#006AFF]" />,
      title: 'Belgesel',
      description: 'Televizyon, Streaming Platformları, Eğitim Kurumları, topluluk Merkezleri, Müzeler',
   },
   {
      icon: <IconAd2 className="text-[#006AFF]" />,
      title: 'Reklam',
      description:
         'Televizyon Reklamları, Dijital Reklamlar (İnternet Reklamları, Sosyal Medya Reklamları), Radyo Reklamları',
   },
   {
      icon: <IconAd2 className="text-[#006AFF]" />,
      title: 'Dijital Medya İçerikleri',
      description:
         'Web Dizileri, Kısa Filmler, Video Bloglar (Vloglar), Podcastler, Online Eğitim Kursları, Sosyal Medya İçerikleri',
   },
   {
      icon: <IconPhotoVideo className="text-[#006AFF]" />,
      title: 'Post-Prodüksiyon Hizmetleri',
      description: 'Editing, Visual Effects, Color correction, Color grading, Ses miksajı',
   },
   {
      icon: <IconUserScan className="text-[#006AFF]" />,
      title: 'Danışmanlık',
      description:
         'Pazarlama ve Reklam Danışmanlığı, Marka Yönetimi ve Pozisyonlama, Dijital Pazarlama Stratejileri, İçerik Stratejisi ve Geliştirme',
   },
]
