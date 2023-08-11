import moment from 'moment';
class Hobby {
  constructor(title, icon, desc = '') {
    this.title = title;
    this.icon = icon;
    this.desc = desc;
  }
}

const howLong = moment('202202', 'YYYYMM').fromNow(true);

const hobby = [
  new Hobby('skate', 'skateboarding', 'Riding through the city streets and downhill'),
  new Hobby('football', 'soccer', 'Play football for fun'),
  new Hobby('jogging', 'run', 'like jogging near lake'),
  new Hobby('travelling', 'rv-truck', 'Tent, forest or riverside, and campfire'),
  // new Hobby('Electronic', 'soldering-iron', 'I enjoy disassembling and repairing technical devices, soldering, and even experimenting with breaking things'),
  new Hobby('walking', 'dog-service', 'Walking with my dog - a time of relaxation and contemplation'),
  new Hobby('music', 'music', "Music is essential to me. I have a deep appreciation for various genres, and I find joy in playing the ukulele as well. It's a wonderful way to express myself creatively and unwind"),
  new Hobby('coding', 'code-json', `I have been actively engaged in software development and coding for the past ${howLong}`),
]

export default hobby