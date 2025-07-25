import * as yup from "yup";

export const editProductSchema = yup.object().shape({
  productId: yup.string().optional(), 
  productName: yup.string().optional(),
  brand_id: yup.number().optional(), 
  productDetails: yup.string().default("").optional(), 
  video: yup
    .string()
    .url("Must be a valid URL")
    .default("https://www.youtube.com/watch?v=p0YQWOB_kPE")
    .optional(), 
  productColors: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product color is required")
    .optional(),
  productQualities: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product quality is required")
    .optional(), 
  productImages: yup
    .array()
    .of(yup.string().url("Each product image must be a valid URL"))
    .min(0)
    .default([])
    .optional(), 
  productSizes: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product size is required")
    .optional(), 
  oldPrice: yup.number().min(0).default(0.0).optional(), 
  productPrice: yup.number().min(0).optional(), 
  productRating: yup.number().max(5).nullable().optional(), 
  productSpecifications: yup
    .array()
    .of(yup.string())
    .min(1, "At least one product specification is required")
    .optional(), 
  tags: yup
    .array()
    .of(yup.string())
    .min(1, "At least one tag is required")
    .optional(), 
  category_id: yup.number().optional(), 
  type_id: yup.number().optional(),
  newArrival: yup.boolean().optional(), 
  productQuantity: yup.number().min(0).optional(), 
  bestSelling: yup.boolean().default(false).optional(), 
  productVerified: yup.boolean().default(false).optional(), 
  productGender: yup.string().optional(), 
  ages: yup
    .array()
    .of(yup.string())
    .min(1, "At least one age group is required")
    .optional(), 
});
