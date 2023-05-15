import * as yup from 'yup';
import schema from './schema';

export type EstimateDecline = yup.InferType<typeof schema>;
