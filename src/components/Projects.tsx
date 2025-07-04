import React from 'react';
import { ExternalLink, Github, Play, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cosmic Runner",
      description: "A fast-paced endless runner set in space with procedurally generated levels and power-ups. Features advanced particle systems and dynamic difficulty adjustment.",
      image: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Unity", "C#", "Mobile", "Procedural Generation"],
      status: "Released",
      players: "25K+",
      rating: 4.8,
      links: {
        demo: "#",
        code: "#",
        store: "#"
      }
    },
    {
      title: "Shadow Realm",
      description: "A dark fantasy RPG with innovative shadow-based mechanics. Players manipulate light and darkness to solve puzzles and defeat enemies.",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Unreal Engine", "C++", "Blueprint", "PC/Console"],
      status: "In Development",
      players: "Beta",
      rating: null,
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Puzzle Nexus",
      description: "A mind-bending puzzle game with 200+ handcrafted levels. Features innovative mechanics that blend 2D and 3D perspectives.",
      image: "https://images.pexels.com/photos/1040153/pexels-photo-1040153.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Unity", "C#", "Shader Programming", "Cross-platform"],
      status: "Released",
      players: "15K+",
      rating: 4.6,
      links: {
        demo: "#",
        code: "#",
        store: "#"
      }
    },
    {
      title: "Mech Warriors VR",
      description: "An immersive VR experience where players pilot giant mechs in intense battles. Features realistic physics and haptic feedback.",
      image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Unity", "VR SDK", "C#", "Physics Simulation"],
      status: "Released",
      players: "8K+",
      rating: 4.9,
      links: {
        demo: "#",
        code: "#",
        store: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-400">Games</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest and most exciting game development projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-teal-800/50 rounded-2xl overflow-hidden border border-teal-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Released' 
                      ? 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-orange-600/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {project.rating && (
                  <div className="absolute top-4 right-4 bg-slate-900/80 rounded-lg px-2 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-white text-sm font-medium">{project.rating}</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-red-400 text-sm font-medium">{project.players} players</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.links.demo && (
                    <button className="flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                      <Play className="h-4 w-4 mr-2" />
                      Play Demo
                    </button>
                  )}
                  {project.links.code && (
                    <button className="flex items-center px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white rounded-lg transition-colors">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </button>
                  )}
                  {project.links.store && (
                    <button className="flex items-center px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white rounded-lg transition-colors">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Store
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;