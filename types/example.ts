import { object, string, number, date, InferType } from 'yup'

const userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
})

// parse and assert validity
// const user = await userSchema.validate(await fetchUser())

type User = InferType<typeof userSchema>
