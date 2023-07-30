class Hobby {
  constructor(title, icon, hint = '') {
    this.title = title;
    this.icon = icon;
    this.hint = hint;
  }
}

const hobby = [
  new Hobby('skateboarding', 'skateboarding', 'люблю кататься на доске по улицам. Часто помогает быстрее добраться до места'),
  new Hobby('travelling', 'rv-truck', 'палатки, природа, автостоп'),
  new Hobby('organizing', 'soldering-iron', 'soldering boards, understanding iron,'),
  new Hobby('walking', 'dog-service', 'walking with the dog. time to thinking...'),
  new Hobby('music', 'music', 'play in guitar ukulele, have some band, had tours cod.'),
  new Hobby('coding', 'code-json', ''),
]

export default hobby