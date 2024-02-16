import { createRouter } from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import yup from '@/~lib/yup'
import { dbConnect } from '@/utils/db/mongodb'
import Authors from '@/utils/db/schemas/authors'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      // await companySchema.validate(req.body, {
      //   stripUnknown: false,
      // })
      const newCompanyData = req.body
      await dbConnect()

      await new Authors(newCompanyData).save()
      return res.status(200).send({ message: 'Company created' })
   } catch (error) {
      const err = error as yup.ValidationError

      if (err.message) {
         return res.status(400).send({ message: err })
      }
      return res.status(400).send({ message: err.message })
   }
})

export default router.handler({
   onError: (err, req, res) => {
      // @ts-ignore
      console.error(err.stack)
      res.status(500).end('Something broke!')
   },
   onNoMatch: (req, res) => {
      res.status(404).end('Page is not found')
   },
})
