import * as yup from 'yup';

export const addColorSchema = yup.object().shape({
  color: yup.string().required('Color is required'),
});

