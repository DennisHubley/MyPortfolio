import React from 'react';
import { Award, Clock, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '15+', label: 'Games Shipped' },
    { icon: Users, value: '50K+', label: 'Players Reached' },
    { icon: Zap, value: '3', label: 'Game Awards' }
  ];

  return (
    <section id="about" className="py-20 bg-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-orange-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate game developer with expertise in creating engaging and innovative gaming experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-teal-700">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-4">
                Started my journey in game development 5 years ago with a passion for creating immersive experiences. 
                I specialize in Unity and Unreal Engine, with expertise in C#, C++, and various game development pipelines.
              </p>
              <p className="text-gray-300 mb-4">
                I've worked on everything from mobile puzzle games to AAA console titles, always focusing on 
                player experience and technical excellence. My approach combines creative vision with solid 
                engineering principles.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new gaming trends, participating in game jams, 
                or mentoring upcoming developers in the community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 text-center border border-teal-700 hover:border-orange-500/50 transition-colors duration-300">
                <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900/50 to-red-900/20 rounded-2xl p-8 border border-teal-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Technical Excellence</h4>
              <p className="text-gray-300 text-sm">
                Clean, optimized code with focus on performance and scalability across all platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Team Collaboration</h4>
              <p className="text-gray-300 text-sm">
                Strong communication skills and experience working in agile development environments.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Creative Vision</h4>
              <p className="text-gray-300 text-sm">
                Balancing technical constraints with creative ambitions to deliver compelling experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;