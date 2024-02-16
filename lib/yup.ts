/* eslint-disable @typescript-eslint/no-explicit-any */
import { StringSchema } from 'yup'
import * as yup from 'yup'
import { ObjectId } from 'mongodb'

yup.addMethod<StringSchema>(
  yup.string,
  'isObjectID',
  function (message?: string) {
    return this.test(
      'isObjectID',
      message || 'Not valid ObjectID',
      (value: any) => {
        if (value === null || value === undefined) {
          return true
        }
        return ObjectId.isValid(value)
      },
    )
  },
)

yup.addMethod<yup.ObjectSchema<any>>(
  yup.object,
  'fieldsNotRequired',
  function () {
    if (typeof this.fields !== 'object' && this.fields == null) {
      return this
    }

    const nextSchema = this.clone()
    nextSchema.withMutation((next) => {
      Object.keys(next.fields).forEach((key) => {
        if (next.fields[key].type !== 'lazy') {
          next.fields[key] = next.fields[key].optional()
          next.fields[key] = next.fields[key].nullable()
        }

        if (typeof next.fields[key].fields === 'object') {
          Object.keys(next.fields[key].fields).forEach((key2) => {
            next.fields[key].fields[key2] =
              next.fields[key].fields[key2].optional()
            next.fields[key].fields[key2] =
              next.fields[key].fields[key2].nullable()
          })
        }
      })
    })
    return nextSchema
  },
)

yup.addMethod<yup.ObjectSchema<any>>(
  yup.object,
  'conditionsDisabled',
  function () {
    if (typeof this.fields !== 'object' && this.fields == null) {
      return this
    }

    const nextSchema = this.clone()
    nextSchema.withMutation((next) => {
      Object.keys(next.fields).forEach((key) => {
        if (next.fields[key].type !== 'lazy') {
          next.fields[key].conditions = []
          next.fields[key].deps = []
          next.fields[key].exclusiveTests = {}
        }
      })
    })
    return nextSchema
  },
)

yup.addMethod<yup.ObjectSchema<any>>(
  yup.object,
  'isNotEmpty',
  function (message?: string) {
    return this.test(
      'isNotEmpty',
      message || 'Object can not empty',
      (value: any) => {
        if (value === null || value === undefined) {
          return false
        }
        return Object.keys(value).length > 0
      },
    )
  },
)

export default yup
