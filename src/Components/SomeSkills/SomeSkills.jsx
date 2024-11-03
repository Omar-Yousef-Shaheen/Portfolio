import { motion } from "framer-motion";

const dataCart = [
  {
    title: "Web Developement",
    subTitle:
      "Elevating your online presence, I specialize in crafting dynamic and responsive websites using leading web frameworks like React js . From sleek user interfaces to robust backend systems.",
  },
  {
    title: "Automation",
    subTitle:
      "Streamlining operations with a touch of magic, I leverage automation to eliminate repetitive tasks, optimize data pipelines, and orchestrate complex workflows.",
  },
  {
    title: "Convert Designs to HTML CSS code",
    subTitle:
      "I excel at converting designs into HTML, CSS and JS code, bringing creative visions to life on the web with precision and responsiveness.",
  },
  {
    title: "Clean Code",
    subTitle:
      "Writing clean, maintainable code that adheres to industry standards and best practices.",
  },
];
function SomeSkills() {
  return (
    <div className="bg-opacity-50 bg-black px-4 py-5 rounded-4">
      <span className="border-bottom border-2 border-opacity-25 border-white h2 pb-2">
        What I Do ,
      </span>
      <div className="row g-3 mt-4">
        {dataCart.map((item, index) => (
          <div key={index} className="col-lg-6">
            <div className="bg-secondary bg-opacity-50 text-black  p-4 rounded-4">
              <p className="text-center   fw-bold border-bottom border-2 border-opacity-25 border-black  pb-2 ">
                {item.title}
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="fw-semibold text-white max-height"
              >
                {item.subTitle}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SomeSkills;
