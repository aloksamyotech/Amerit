import * as yup from 'yup';
import schema from './schema';

export type EstimateAccept = yup.InferType<typeof schema>;
