import { Briefcase, Users, Target, TrendingUp, Calendar, Building, MapPin } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      title: "AEM Notification System",
      description: "Designed notification cards for software compliance transition",
      highlight: "Enhanced licensing adherence",
      tags: ["AEM", "User Engagement", "Compliance"],
    },
    {
      title: "Promotional Campaigns",
      description: "Developed AEM-based discount notification system",
      highlight: "40% increase in conversion rates",
      tags: ["AEM", "Campaign Management", "Revenue Growth"],
    },
    {
      title: "A/B Testing Leadership",
      description: "Conducted optimization testing for user retention",
      highlight: "Determined optimal 7-day grace period",
      tags: ["A/B Testing", "Data Analysis", "User Retention"],
    },
  ];

  const technicalSkills = ["AEM", "MILO", "A/B Testing", "Figma", "Jira", "AJO", "UWP"];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Work Experience</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Driving innovation and delivering measurable results through technical leadership and strategic
            problem-solving
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Job Header */}
          <div className="glass-card rounded-2xl p-8 space-y-6 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-focus-indigo to-focus-purple flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Software Engineer (Full-Time)</h3>
                <div className="flex flex-wrap gap-4 text-foreground/60 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-focus-indigo/20 border border-focus-indigo/30">
                    <Building className="w-4 h-4 text-focus-indigo" />
                    <span className="font-semibold text-focus-indigo">HCLTech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-focus-rose/20 border border-focus-rose/30">
                    <Users className="w-4 h-4 text-focus-rose" />
                    <span className="font-semibold text-focus-rose">Client: Adobe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 border-l-4 border-focus-purple">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-focus-purple" />
                  <span className="font-semibold">Team Leadership</span>
                </div>
                <p className="text-sm text-foreground/60">Leading team of 4</p>
              </div>
              <div className="glass-card rounded-xl p-4 border-l-4 border-focus-pink">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-focus-pink" />
                  <span className="font-semibold">Projects Delivered</span>
                </div>
                <p className="text-sm text-foreground/60">15+ POCs delivered</p>
              </div>
              <div className="glass-card rounded-xl p-4 border-l-4 border-focus-cyan">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-focus-cyan" />
                  <span className="font-semibold">Business Impact</span>
                </div>
                <p className="text-sm text-foreground/60">40% conversion increase</p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-focus-teal" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass-card rounded-xl p-6 space-y-4 animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-foreground/60">{achievement.description}</p>
                  <div className="px-3 py-2 rounded-lg bg-focus-green/20 border border-focus-green/30 text-sm text-focus-green">
                    {achievement.highlight}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-background/50 text-xs text-foreground/70 border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-focus-yellow" />
              <h4 className="text-xl font-semibold">Technical Skills</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-focus-yellow/20 border border-focus-yellow/30 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
