# Ankit Renduchintala

Take this image as an example.
Project brief: modern portfolio website for Ankit Renduchintala

1. Introduction
Build a modern, editorial-style, single-page portfolio website for Ankit Renduchintala, a Software Engineer with ten years of experience designing, building, and releasing scalable full-stack systems. He holds a Master’s in Computer Science from the University of Toledo (2018) and is currently learning AI Engineering. His work spans enterprise Java/Spring Boot back ends, Angular and React front ends, and cloud-native infrastructure on AWS and Kubernetes. The site should present him as a senior, dependable engineer who is expanding into AI, and it should invite visitors to contact him about full-stack design and development work, including cloud services.

The site features Ankit’s profile picture prominently in the hero area (see below). Use a placeholder image with a clear swap-in spot until he supplies the final photo.

2. Visual style (follows the attached reference screenshot)

Background: warm beige/sand (around 
#DCCFB5), with a subtle pixel-mosaic texture made of slightly lighter and darker beige squares. Keep it low contrast so it never competes with the text.
Primary text color: deep navy (around 
#232649) for all headings, body text, nav, and icons.
Accent color: a warm amber/orange (around 
#E8A33D), used only for a handwritten-script accent word, hover states, and small highlights.
Hero typography: Ankit’s name in an extra-bold, wide, uppercase grotesque sans-serif (for example Syne ExtraBold, Unbounded, or Archivo Expanded). Stack it on two lines, ANKIT and RENDUCHINTALA, and scale it so it spans nearly the full viewport width. The long surname should use fluid type (clamp() or viewport units) so it never overflows on mobile.
Body and UI typography: a clean geometric sans-serif (such as Space Grotesk or DM Sans) in small, lightly tracked text. Pair it with a flowing handwritten script (such as Mrs Saint Delafield or Allura) in amber for one accent phrase, for example “Full-Stack Engineer”, overlapping the profile photo.
Overall feel: confident, minimal, and typographic. Use generous whitespace, large type, thin underlines, and very few boxes or borders.

3. Site structure
A single-page layout with smooth scrolling and a fixed top navigation: INDEX · EXPERIENCE · ABOUT · SERVICES · CONTACT. The active item gets a thin underline.

Global header

Top-left: a small logo mark (a simple “AR” monogram or pixel-style icon that echoes the mosaic background).
Top-center: the nav links above.
Top-right: LinkedIn and GitHub icons linking to the profiles below.

Section 1: Index (Hero)

The giant two-line name ANKIT / RENDUCHINTALA in navy.
Directly below it, a slow, continuous marquee ticker of role keywords separated by × and + symbols: Full-Stack × Software Engineer × Cloud × AI Engineering × Full-Stack + Software Engineer + ...
Below the ticker, a two-column row. On the left is the profile picture in a clean rectangular crop with a slightly darker beige backing block, in the same arrangement as the reference. On the right is the amber script phrase “Full-Stack Engineer” overlapping the photo’s edge, followed by a short intro paragraph: “Software Engineer with ten years of experience designing, building and releasing scalable full-stack systems. Currently learning AI Engineering.”
A small scroll cue and a “Get in touch” link to the Contact section.

Section 2: About

A short bio built from his background: ten years of experience building and releasing scalable full-stack systems, and a current focus on learning AI Engineering.
Education: Master’s in Computer Science, University of Toledo, graduated 2018.
A small “Currently” line: Learning AI Engineering.
Open to opportunities in full-stack design and development, including cloud services.

Section 3: Experience (replaces “Work”, since no projects are listed)
Present a clean timeline or stacked list, most recent first. Each row shows the role in large navy type, the company beside it, and the dates aligned to the right, with thin dividers and a subtle hover effect.

Senior Software Engineer, Winsupply, 2025 – 2026
Senior Software Developer, NTT DATA, 2018 – 2025
Software Developer, Dell Services, 2014 – 2016

Do not invent project descriptions or achievements. If more detail is added later, it can expand under each row.

Section 4: Skills and Expertise
Group the skills into four clearly labeled blocks, shown as typographic lists or minimal pill tags in navy outline style:

Languages: Java, TypeScript, JavaScript, SQL, Apex, Python (Intermediate)
Frameworks and Libraries: Angular 19, PrimeNG, RxJS, NgRx (SignalStore), React, Next.js, Material UI, Spring Boot and its modules, Hibernate, REST APIs, Swagger/OpenAPI, Apache Camel, Citrus, Cucumber, Jasmine, Jest, JUnit, Mockito
Cloud and DevOps: AWS (EC2, EKS, S3, RDS, IAM, VPC, Lambda), Docker, Kubernetes, OpenShift, Azure DevOps, GitHub, Jenkins, ArgoCD, Maven, Vault, Datadog, Elasticsearch, MinIO S3
Data and Messaging: SQL Server, IBM DB2, MySQL, Oracle 12c, Couchbase, Redis, Kafka, IBM MQ, MuleSoft

Optionally add a fifth, highlighted block called “Currently exploring: AI Engineering” in the amber accent.

Section 5: Services

A single prominent offering: Full-Stack Design and Development, including Cloud Services.
Briefly describe it as end-to-end delivery: designing and building front ends (Angular, React, Next.js), back-end services and APIs (Spring Boot, REST), data and messaging layers, and cloud deployment and operations (AWS, Docker, Kubernetes, CI/CD).
Present it as a large typographic statement with three or four supporting lines, not a grid of cards.

Section 6: Contact

Large heading “LET’S TALK” (or similar) in the same bold navy type.
Details:
Email: ankit.rlps@gmail.com
LinkedIn: https://www.linkedin.com/in/ankit-renduchintala
GitHub: https://github.com/ankitrlps
A contact form with Name, Email, and Message fields and a Send button. Include client-side validation, a clear success message, and a form-handling service (such as Formspree or EmailJS) so messages reach his email.
Footer: © 2026 Ankit Renduchintala, plus the social icons again.

4. Design and interaction elements

The pixel-mosaic beige background should be subtle and static, or shift slightly on scroll.
The marquee ticker should loop smoothly and pause on hover.
The hero name should fade or slide in on load. Sections should reveal on scroll with understated animations, and the amber script text can be drawn in or faded in.
Links and buttons should show a thin navy underline on hover, switching to amber on interaction.
Keep contrast high: navy on beige passes WCAG AA, but verify the amber text at small sizes and use it only for large or decorative text.

5. Technical requirements

Fully responsive and mobile-first. The hero name must scale to fit narrow screens, and the nav should collapse into a minimal menu on mobile.
Fast loading, with optimized images, semantic HTML, and accessible markup (alt text, focus states, keyboard navigation, respect for prefers-reduced-motion).
Include SEO basics: title “Ankit Renduchintala | Full-Stack Software Engineer”, a meta description, and Open Graph tags.
A suggested build stack is Next.js with React and Tailwind CSS or plain CSS, which fits his skill set, but any modern stack that meets the design above is fine.

6. Content notes

No projects section, per Ankit’s preference.
Do not fabricate testimonials, metrics, or project details. Use only the information provided above.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
