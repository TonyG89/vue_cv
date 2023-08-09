import { gulp, agGrid, figma, joomla, vue } from "@/components/icons/";


export default function () {

  class TechSkill {
    constructor(title, hint = null, type = 1, icon = false, stack = null) {
      this.title = title;
      this.hint = hint;
      this.type = type;
      this.icon = icon;
      this.stack = stack
    }
  }

  class FullTechSkill extends TechSkill {
    constructor(title, started, hint, icon, stack) {
      super(title, hint, 3, icon, stack)
      this.started = started
    }
  }

  class BasicTechSkill extends TechSkill {
    constructor(title, hint, icon) {
      super(title, hint, 2, icon)
    }
  }

  const techSkillsClass = [
    [
      new FullTechSkill('HTML', '2010', '', 'mdi-language-html5'),
      new FullTechSkill('CSS', '2010', ['SASS', 'Bootstrap 5', 'TailwindCSS'], 'mdi-language-css3'),
      new FullTechSkill('JavaScript', '03.04.2022', ['ES6', 'read book Kyle Simpson and other'], 'mdi-language-javascript'),
      new FullTechSkill('Vue3', '11.2022', '', vue),
      new FullTechSkill('Figma', '', '', figma),
      new FullTechSkill('GIT', '04.2022', '', 'mdi-git'),
      new FullTechSkill('Google Sheets', '2010', '', 'mdi-file-excel'),
    ],
    [
      new BasicTechSkill('SQL', '', 'mdi-database'),
      new FullTechSkill('React', '07.2022', '', 'mdi-react'),
      new FullTechSkill('Ag-Grid', '02.2023', '', agGrid),
      new FullTechSkill('Linux', '2006', 'UBUNTU 2006-2009', 'mdi-linux'),
    ],

    [
      new BasicTechSkill('TypeScript', '', 'mdi-language-typescript'),
      new BasicTechSkill('NODE JS', '', 'mdi-nodejs'),
      new BasicTechSkill('Gulp', '', gulp),
      new BasicTechSkill('Webpack', '', 'mdi-webpack'),
    ],
    [
      new FullTechSkill('PHP', '2012', '', 'mdi-language-php'),
      new FullTechSkill('wordpress', '2012', '', 'mdi-wordpress'),
      new FullTechSkill('joomla', '2012', '', joomla),
    ],
  ]


  class SoftSkill {
    constructor(title, type = null, desc = '',) {
      this.title = title;
      this.type = type;
      this.desc = desc;
    }
  }



  const softSkills = [
    // new SoftSkill('Orderly', 1),
    new SoftSkill('Communication', 1),
    new SoftSkill('Teamwork', 1),

    new SoftSkill('Adaptability', 2),
    new SoftSkill('Flexibility', 2),

    new SoftSkill('Patience', 3),
    new SoftSkill('Self-Motivation', 3),

    new SoftSkill('Critical Thinking', 4),
    new SoftSkill('Analytical Thinking', 4),

  ]
  // Orderly
  // Responsibility
  // Punctuality

  // Communication
  // Stress resistance
  // Teamwork

  // Creativity

  // Self-development
  // Attention to detail
  // Persistence
  return {
    techSkillsClass,
    softSkills
  }
}