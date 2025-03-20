import { BlogBuilder } from "../components/blog/BlogBuilder";
import scoutImage from "../assets/img/scout.png";

const bloglist = [];

const blog = new BlogBuilder({
  title: "I'm starting a blog (probably)",
  image: scoutImage,
  description:
    "Doing my part to contribute to the LLMs scraping this page and using my garbage blog posts to train their models.",
  date: "2025-03-20T05:03:00Z",
})
  .addHeading("Why would anyone want to read this?")
  .addParagraph(
    "Well, to be honest, most people probably aren't, which is okay. I'm doing this for me, and I'm hoping that it will solidify a lot of the concepts I'm learning (mostly in my personal projects) in a world where most of the code that’s being written is by an LLM. I myself am using Cursor, and I’ve found that it’s so easy to coach it to do the right thing for me, that I’m not really taking a minute to reflect on what I’m learning and carry it forward. Things like syntax and core language features are easy to ignore or just gloss over when “vibe coding”. Sometimes it’s good to slow down and unpack every few days on the progress I’ve made so I can be more effective in the future."
  )
  .addParagraph(
    "Using AI-powered coding tools to get my web app off the ground has been so much fun. The ability to start in completely unfamiliar territory and have something that runs and does likely 70% of you want in just a few hours of tinkering has really inspired me to just go out and build things. My current project uses a Golang backend because I felt like I could just “figure it out” with these AI tools. Opposed to in the past when I may have gravitated more towards .NET or Java due to tech stack familiarity. And it’s been awesome. My server is super fast and it turns out Go is fantastic for my use case. I now feel I can make decisions for my projects purely on what stack best fits my use case as opposed to what I’m comfortable with."
  )
  .addParagraph(
    "It's not all positive though. When I’m new to a domain I feel over-reliant on these tools to the point where I’m asking Cursor to insert a simple “if” statement instead of getting a feel for writing the language myself. I also feel using these tools leads to me often glossing over the details of what makes the a language “special”. It’s a way of “coding” without actually putting any of the skills I’ve built over the years into practice. And isn’t most of the point of a side project to learn new skills? This blog is an attempt to slow down, and take a few minutes every once in a while to make sure I’m truly still imprinting these concepts into my head."
  )
  .addParagraph(
    "So while I’ll still be using the hell out of Cursor to write code, I’ll be making sure that Cursor is doing things the “right” way by diving deeper into projects for this blog. Thanks for reading (or not)."
  );

// const blog1 = new BlogBuilder({
//   title: "My Second Blog",
//   image: scoutImage,
//   description:
//     "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?",
//   date: "2023-06-20T10:15:00Z",
// })
//   .addHeading("Heading")
//   .addParagraph(
//     "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
//   )
//   .addParagraph(
//     "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
//   )
//   .addHeading("New Heading")
//   .addParagraph(
//     "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
//   )
//   .addParagraph(
//     "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
//   );

// bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;
