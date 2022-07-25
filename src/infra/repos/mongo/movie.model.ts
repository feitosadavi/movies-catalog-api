import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
})

const MovieModel = mongoose.model('Movie', MovieSchema)

export = MovieModel