export default function cloudinaryLoader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/demo/image/upload/${params.join(
    ","
  )}${src}`;
}
// const IMAGE_URL = process.env.IMAGE_URL
// export default function myImageLoader({ src, width, quality }) {
//     return `${IMAGE_URL}/${src}?w=${width}&q=${quality || 75}`
//   }
