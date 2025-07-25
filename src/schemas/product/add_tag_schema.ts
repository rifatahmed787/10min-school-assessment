import * as yup from 'yup';

export const addTagSchema = yup.object().shape({
  tags: yup.string().required('Tag name is required'),
});

