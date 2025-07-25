import * as yup from 'yup';

export const addCategorySchema = yup.object().shape({
  categoryName: yup.string().required('Category name is required'),
});

