import { motion } from "framer-motion";
import { blogPosts } from "./blog.data";

const BlogGrid = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 pt-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-8 flex items-center justify-between rounded-[3px] border border-[#D9DEE4] bg-white px-6 py-6 shadow-sm">
          <h2 className="text-[16px] font-medium text-[#0E2341] sm:text-[18px]">
            Logistics Insights
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] sm:text-[12px]">
            <span className="text-[#099E8D]">•</span> Blogs/News{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[8px] bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-[180px] w-full rounded-[4px] object-cover"
              />

              <div className="px-2 pt-4 pb-4">
                <h3 className="min-h-[40px] text-[14px] font-semibold leading-[1.2] text-[#0E2341]">
                  {post.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;