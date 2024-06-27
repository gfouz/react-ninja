interface Project {
  image: string;
  title: string;
  content: string;
}

interface ProjectList {
  projects: Project[];
}

export default function Projects({ projects }: ProjectList) {
  return (
    <div className='grid-auto-fit gap-8 '>
      {/* Your projects here */}

      {projects.map((project) => (
        <div className='text-gray-900 bg-slate-400 rounded-2xl overflow-hidden'>
          <div className='aspect-[600/400] text-center rounded-lg'>
            <div className='overflow-hidden'>
              <img
                className='transition-all hover:scale-[1.2]'
                src={`images/${project?.image}`}
                alt=''
              />
            </div>
          </div>
          <article className='p-4  embedded-link'>
            <a href={project.url}>
              <h3 className='text-slate-800 text-xl font-bold mb-2 capitalize'>
                {project.title}
              </h3>
            </a>

            <p
              className='text-base text-slate-800 paragraphs-link'
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </article>
        </div>
      ))}
    </div>
  );
}
