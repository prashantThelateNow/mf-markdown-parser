import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactNode } from "react";

const Content = (props: { children: ReactNode }) => {
  const { children } = props;
  // const file_name = "Sample";
  // const [markdown, setMarkdown] = useState("");

  const markdown = `
  At Mindfire, we are passionate about open-source technology and its power to drive innovation and collaboration. Welcome to our open-source projects hub, where we contribute to and collaborate with the global open-source community on exciting and impactful projects.
  
  
  ## About Us
  Mindfire Digital LLP is a leading provider of Software & IT services. We are dedicated to business growth through the development and delivery of custom projects. With over two decades of experience, Mindfire has forged partnerships with global companies across diverse industries, consistently delivering stellar software products. Our highly skilled team of 650+ passionate technologists excel at connecting the dots between people, technology, products, and business, ensuring seamless innovation and success.
  [Visit our official website](https://www.mindfiredigitalllp.com/)
  
  
  ## Our Mission
  
  Our mission is to foster creativity, share knowledge, and build solutions that make a positive impact on the world. We believe that by working together with the open-source community, we can tackle complex challenges and create cutting-edge solutions that benefit everyone.
  
  ## Why Open Source?
  
  Open source embodies the spirit of collaboration, transparency, and continuous improvement. By sharing our code, ideas, and expertise with the world, we aim to inspire others and contribute to a culture of innovation and learning.
  
  ## Our Contributions
  
  Explore our growing list of open-source projects, ranging from software libraries and frameworks to tools and utilities. We are committed to actively contributing to these projects and maintaining a strong presence in the open-source ecosystem.
  
  ## Get Involved
  
  Join us on this exciting journey! Whether you're a developer, designer, tester, or simply passionate about open source, there are many ways to get involved. Contribute to our projects, report issues, suggest improvements, or simply engage in discussions.
  
  
  ## Explore Our Projects
  
  Ready to dive in? We have exciting open-source projects in the pipeline, and they'll be coming soon to our growing community. Stay tuned for updates on our upcoming projects.
  
  We're actively working on these initiatives, and they'll be available for contributions and exploration in the near future. Be sure to check back regularly for updates!
  
  
  ## Connect with Us
  
  Stay updated with our latest contributions and news. Follow us on social media, join our mailing list, and be part of our vibrant open-source community.
  
  Connect with us on social media:
  
  - [LinkedIn](https://www.linkedin.com/company/mindfire-solutions/)
  - [Twitter](https://twitter.com/mindfires)
  - [Instagram](https://www.instagram.com/mindfiresolutions/)
  - [Facebook](https://www.facebook.com/MindfireSolutions)
  
  We look forward to collaborating with you and making a meaningful impact through open source. Let's innovate together!
  
  [Visit our website](https://www.mindfiredigitalllp.com/)
`;

  /**
   * Use below method when, you want to fetch markdown from .md file
   */
  // useEffect(() => {
  //   import(`../../markdowns/${file_name}.md`)
  //     .then((res) => {
  //       fetch(res.default)
  //         .then((res) => res.text())
  //         .then((res) => setMarkdown(res));
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <div className="max-w-5xl px-24 py-8 my-0 mx-auto">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2(props) {
            const { ...rest } = props;
            return (
              <h2
                className="text-mindfire-text-black mt-8 mb-4 text-lg font-bold"
                {...rest}
              />
            );
          },
          p(props) {
            const { ...rest } = props;
            return (
              <p
                className="my-4 first-of-type:my-0 text-lg text-mindfire-content-p-text-color"
                {...rest}
              />
            );
          },
          ul(props) {
            const { ...rest } = props;
            return (
              <ul className="mt-0 list-disc ps-10 my-4 text-lg text-mindfire-content-p-text-color" {...rest} />
            );
          },
          li(props) {
            const { ...rest } = props;
            return (
              <li
                className="pb-1 text-lg text-mindfire-content-p-text-color font-semibold"
                {...rest}
              />
            );
          },
          a(props) {
            const { ...rest } = props;
            return (
              <a
                className="text-mindfire-text-red font-semibold text-lg pb-[2px] border-b-2 border-transparent transition-[border-color] duration-300 hover:border-mindfire-text-red hover:border-b-2 "
                {...rest}
              />
            );
          },
        }}
      >
        {markdown}
      </Markdown>
      {children}
    </div>
  );
};

export default Content;
