import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    //id: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    time: { type: Number, required: true },
    image: { type: String, required: true },
    introduce: { type: String, required: true },
  },
  { timestamps: true } // This will add createdAt and updatedAt columns
);
const MovieModel = mongoose.model('movies', MovieSchema);

export { MovieModel };
