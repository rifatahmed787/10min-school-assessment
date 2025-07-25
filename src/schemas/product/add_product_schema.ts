import * as yup from "yup";

export const addProductSchema = yup.object().shape({
  productId: yup.string().required("Product ID is required"),
  productName: yup.string().required("Product name is required"),
  brand_id: yup.number().required("Brand ID is required"),
  productDetails: yup.string().default(""),
  video: yup
    .string()
    .url("Must be a valid URL")
    .default("https://www.youtube.com/watch?v=p0YQWOB_kPE"),
  productColors: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product color is required")
    .required("Product colors are required"),
  productQualities: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product quality is required")
    .required("Product qualities are required"),
  productImages: yup
    .array()
    .of(yup.string().url("Each product image must be a valid URL"))
    .min(0)
    .default([]),
  productSizes: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product size is required")
    .required("Product sizes are required"),
  oldPrice: yup.number().min(0).default(0.0),
  productPrice: yup.number().min(0).required("Product price is required"),
  productRating: yup.number().max(5).nullable(),
  productSpecifications: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product specification is required")
    .required("Product specifications are required"),
  tags: yup
    .array()
    .of(yup.string())
    .min(1, "At least one tag is required")
    .required("Tags are required"),
  category_id: yup.number().required("Category ID is required"),
  type_id: yup.number().required("Type ID is required"),
  newArrival: yup.boolean().required("New arrival status is required"),
  productQuantity: yup.number().required("Product quantity is required").min(0),
  bestSelling: yup.boolean().default(false),
  productVerified: yup.boolean().default(false),
  productGender: yup.string().required("Product gender is required"),
  ages: yup
    .array()
    .of(yup.string())
    .min(1, "At least one age group is required")
    .required("Ages are required"),
});
