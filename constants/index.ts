export const development = ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "MongoDB"];
export const frameworksAndLibraries = ["ReactJS", "Next.js", "Framer Motion", "GSAP"];
export const toolsAndSoftSkills = ["Git", "GitHub", "Leadership", "Communication", "Teamwork"];

export const projects = [
    {
        title: "To-Gather",
        img: "/assets/to-gather.png",
        bg: "/assets/to-gather.png",
        link: "https://tgcommunity.vercel.app/"
    },
    {
        title: "Dev Overflow",
        img: "/assets/devoverflow-bg1.png",
        bg: "/assets/devoverflow-bg1.png",
        link: "https://stack-overflow-nextjs13-git-main-s-a-b-a-r-i-s-h.vercel.app/"
    },
    {
        title: "Thoughts",
        img: "/assets/Thought.png",
        bg: "/assets/thoughts-bg.jpg",
        link: "https://thoughts-a-thread.vercel.app/"
    },
    {
        title: "Incepto",
        img: "/assets/Incepto.png", 
        bg: "/assets/incepto-bg.jpg", 
        link: "https://incepto24.vercel.app/"
    }
]
export const testimonials = [
    {
        name: "Asha Manami",
        img: "/assets/ashamiami.jpg",
        position:"Ex-Mediatek Engineer",
        description: "I had the pleasure of working with sabarish on a recent project, and I was highly impressed with his skills and dedication. Despite still being in college, he demonstrated strong technical abilities, a quick learning aptitude, and excellent problem-solving skills. His contributions were valuable, and he showed great potential for a successful career in software development. I highly recommend sabarish for any future opportunities.",
        linkedin: "https://www.linkedin.com/in/asha-manami/"
    },
    {
        name: "Abhimanyu R B",
        img: "/assets/abhimanyu.jpg",
        position:"ToByaag - Founder",
        description: "Sabarish is a key member of our community, actively participating in various activities and always staying updated. His creative ideas and contributions to web design and community development have played a crucial role in our growth. We greatly appreciate his dedication and innovative spirit, which make him an essential part of our team.",
        linkedin: "https://www.linkedin.com/in/abhimanyurb/"
    }
]

const webUrl = 'sabarishs.vercel.app'

export const siteMetadataConfig: { ogImage: string } = {
    // ogImage: '/assets/opengraph-image.jpg',
    ogImage: `https://${webUrl}/assets/opengraph-image.jpg`,
}