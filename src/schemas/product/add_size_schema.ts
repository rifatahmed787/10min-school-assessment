import * as yup from 'yup';

export const addSizeSchema = yup.object().shape({
  size: yup.string().required('Size is required'),
});

