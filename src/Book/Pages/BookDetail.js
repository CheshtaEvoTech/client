import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function BookDetail() {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    validationSchema: Yup.object({
      rating: Yup.number()
        .min(1, "Rating must be at least 1 star")
        .max(5, "Rating cannot be more than 5 stars")
        .required("Rating is required"),
      comment: Yup.string()
        .min(5, "Comment must be at least 5 characters long")
        .required("Comment is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container my-4">
      <div className="row px-4 ">
        <div className="col-xl-6">
          <div className="card w-100  card-xl-stretch p-5">
            <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card w-100  p-5 my-3 ms-4 card-xl-stretch">
            <div class="d-flex flex-column gap-7 gap-lg-10">
              <div class="">
                <div class="card-header">
                  <div class="card-title">
                    <h2>Book Name</h2>
                  </div>
                </div>

                <div class="card-body pt-0">
                  <div class="mb-10 fv-row mt-4">
                    <div class="text-muted fs-7">Author</div>
                  </div>

                  <div>
                    <div
                      id="kt_ecommerce_add_product_description"
                      name="kt_ecommerce_add_product_description"
                      class="min-h-200px mb-2"
                    ></div>

                    <div class="text-muted fs-7">
                      Set a description to the product.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-4 ">
        <div className="card">
          <div className="card-body py-3">
            <div className="w-100 flex  mt-4 ">
              <form onSubmit={formik.handleSubmit} className=" w-100">
                <div className="w-36 ">
                  <div className="rating ms-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`bi ${
                          formik.values.rating >= star
                            ? "bi-star-fill"
                            : "bi-star"
                        } fs-5 `}
                        onClick={() => formik.setFieldValue("rating", star)}
                      ></i>
                    ))}
                  </div>
                  {formik.touched.rating && formik.errors.rating ? (
                    <div className="text-danger whitespace-nowrap ">
                      {formik.errors.rating}
                    </div>
                  ) : null}
                </div>
                <div className="d-flex gap-3 w-100 row ">
                  <div className="col-xl-9">
                    <textarea
                      id="comment"
                      name="comment"
                      placeholder="Write a comment"
                      className=" outline-none py-2 px-4 mt-4 w-100"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.comment}
                    ></textarea>
                    {formik.touched.comment && formik.errors.comment ? (
                      <div className="text-danger">{formik.errors.comment}</div>
                    ) : null}
                  </div>

                  <div className="col-xl-2 p-0 m-0">
                    <button
                      type="submit"
                      className="bg-black  w-32  text-sm text-white px-2 h-12  mt-4 me-0  "
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
