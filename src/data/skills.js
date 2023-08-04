export default function () {

  class SoftSkill {
    constructor(title, started = '', hint = null, type = 1) {
      this.title = title;
      this.started = started;
      this.hint = hint;
      this.type = type;
    }
  }

  class MainSoftSkill extends SoftSkill {
    constructor(title, started, hint) {
      super(title, started, hint, 3)
    }
  }

  class ExtraSoftSkill extends SoftSkill {
    constructor(title, started, hint) {
      super(title, started, hint, 2)
    }
  }

  class MinimalSoftSkill extends SoftSkill {
    constructor(title, started, hint) {
      super(title, started, hint, 1)
    }
  }

  const softSkillsClass = [
    new MainSoftSkill('HTML', '2012', ''),
    new MainSoftSkill('CSS', '2012', ['SASS', 'Bootstrap 5', 'TailwindCSS']),
    new MainSoftSkill('JavaScript', '03.04.2022', ['ES6', 'read book Kyle Simpson and other']),
    new MinimalSoftSkill('Gulp'),
    new MinimalSoftSkill('Webpack'),
    new MinimalSoftSkill('NODE JS'),
    new MinimalSoftSkill('Php'),
    new MinimalSoftSkill('joomla, wordpress'),
    new MainSoftSkill('Vue3'),
    new MainSoftSkill('Figma'),
    new ExtraSoftSkill('Google Sheets'),
    new ExtraSoftSkill('SQL'),
    new ExtraSoftSkill('React'),
    new ExtraSoftSkill('GIT', '04.2022', ''),
    new ExtraSoftSkill('Ag-Grid'),
  ]

  const softSkills = [
    {
      title: 'HTML',
      started: '2014',
      hint: '',
      rate: '1',
    },
    {
      title: 'CSS',
      hint: ['SASS', 'Bootstrap 5', 'TailwindCSS'],
      rate: '1',
    },
    {
      title: 'JS',
      hint: ['ES6', 'read book Kyle Simpson and other'],
      rate: '1',
    },
    {
      title: 'GIT'
    },
    {
      title: 'Gulp'
    },
    {
      title: 'Webpack'
    },
    {
      title: 'Google Sheets'
    },
    {
      title: 'SQL'
    },
    {
      title: 'NODE JS'
    },
    {
      title: 'Vue3'
    },
    {
      title: 'React'
    },
    {
      title: 'Figma'
    },
    {
      title: 'Ag-Grid'
    },
    {
      title: 'Php',
      hint: 'joomla, wordpress'
    },
  ]

  class HardSkill {
    constructor(title, type = null, desc = '',) {
      this.title = title;
      this.type = type;
      this.desc = desc;
    }
  }



  const hardSkills = [
    [new HardSkill('Orderly', 1),
    new HardSkill('Responsibility', 1),
    new HardSkill('Punctuality', 1),
    ],
    [new HardSkill('Communication', 2),
    new HardSkill('Stress resistance', 2),
    new HardSkill('Teamwork', 2),
    ], [
      new HardSkill('Creativity', 3),
    ], [new HardSkill('Self-development', 4),
    new HardSkill('Attention to detail', 4),
    new HardSkill('Persistence', 4),
    ]
  ]

  // const hardSkillsDesc = [
  //   'I enjoy completing tasks on time and never being late. I am always looking for ways to improve my productivity and efficiency.',

  // ]
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
  return { softSkills, hardSkills, softSkillsClass }
}