import mongoose from 'mongoose'

const AuthorsSchema = new mongoose.Schema(
  {
    realName: {
      type: String,
      minLength: 1,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    emailAddress: {
      type: String,
      maxlength: 300,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['admin', 'author', 'moderator'],
      default: 'user',
      required: true,
    },
    provider: {
      type: String,
      enum: ['twitter', 'google', 'facebook', 'github', 'discord'],
      required: true,
      default: 'google',
    },
    profilePicture: {
      type: String,
      //   default: 'https://i.imgur.com/X2JfXZb.png',
    },
    lastIpAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
)

const Authors =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  mongoose.models.Authors || mongoose.model('Authors', AuthorsSchema)

export default Authors
