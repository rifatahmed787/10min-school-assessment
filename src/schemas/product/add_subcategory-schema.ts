import * as yup from 'yup';

export const addSubCategorySchema = yup.object().shape({
  typeName: yup.string().required('Sub Category name is required'),
});

