import React from 'react';
import { Code, Gamepad2, Palette, Zap, Smartphone, Monitor, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Engines & Frameworks",
      icon: Gamepad2,
      color: "orange",
      skills: [
        { name: "Unity", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
        { name: "Unreal Engine", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" },
        { name: "Godot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Vite", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "red",
      skills: [
        { name: "C#", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Rust", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" }
      ]
    },
    {
      title: "Design & Creative Tools",
      icon: Palette,
      color: "yellow",
      skills: [
        { name: "Blender", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
        { name: "Photoshop", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "After Effects", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" },
        { name: "Maya", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maya/maya-original.svg" },
        { name: "Sketch", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg" }
      ]
    },
    {
      title: "Development Tools & Platforms",
      icon: Zap,
      color: "teal",
      skills: [
        { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Visual Studio", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
        { name: "Android", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
        { name: "Apple", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: {
        bg: "from-orange-600/20 to-orange-600/5",
        border: "border-orange-500/30",
        icon: "text-orange-400",
        skillBg: "bg-orange-600/10 hover:bg-orange-600/20 border-orange-500/20"
      },
      red: {
        bg: "from-red-600/20 to-red-600/5",
        border: "border-red-500/30",
        icon: "text-red-400",
        skillBg: "bg-red-600/10 hover:bg-red-600/20 border-red-500/20"
      },
      yellow: {
        bg: "from-yellow-600/20 to-yellow-600/5",
        border: "border-yellow-500/30",
        icon: "text-yellow-400",
        skillBg: "bg-yellow-600/10 hover:bg-yellow-600/20 border-yellow-500/20"
      },
      teal: {
        bg: "from-teal-600/20 to-teal-600/5",
        border: "border-teal-500/30",
        icon: "text-teal-400",
        skillBg: "bg-teal-600/10 hover:bg-teal-600/20 border-teal-500/20"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-yellow-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to create amazing gaming experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 border ${colors.border} hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-slate-900/50 rounded-lg p-3 mr-4`}>
                    <category.icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`${colors.skillBg} border rounded-lg p-4 transition-all duration-300 hover:scale-105 cursor-pointer group`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <img 
                            src={skill.iconUrl} 
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback to a generic icon if the devicon fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="bg-gradient-to-r from-slate-900/50 to-red-900/20 rounded-2xl p-8 border border-teal-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Game Architecture", icon: "🏗️" },
              { name: "Performance Optimization", icon: "⚡" },
              { name: "Cross-Platform Development", icon: "🌐" },
              { name: "Version Control", icon: "📝" },
              { name: "Agile Development", icon: "🔄" },
              { name: "Technical Leadership", icon: "👥" },
              { name: "Code Review", icon: "🔍" },
              { name: "Documentation", icon: "📚" }
            ].map((skill, index) => (
              <div key={index} className="bg-teal-800/50 rounded-lg p-4 text-center border border-teal-600 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Areas */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 rounded-xl p-6 border border-orange-500/30 text-center">
            <Monitor className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">PC & Console</h4>
            <p className="text-gray-300 text-sm">High-performance games for desktop and console platforms</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-600/20 to-red-600/5 rounded-xl p-6 border border-red-500/30 text-center">
            <Smartphone className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Mobile Games</h4>
            <p className="text-gray-300 text-sm">Optimized experiences for iOS and Android devices</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 rounded-xl p-6 border border-yellow-500/30 text-center">
            <Cpu className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">VR/AR</h4>
            <p className="text-gray-300 text-sm">Immersive virtual and augmented reality experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;