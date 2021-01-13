class Career {
  constructor(option) {
    this.career = option.career;
    this.work = option.work;
  }

  static getInstance(career) {
    switch (career) {
      case "coder":
        return new Career({ career: "程序员", work: ["写代码", "修Bug"] });
        break;
      case "hr":
        return new Career({ career: "人力资源", work: ["招聘", "员工信息管理"] });
        break;
      case "boss":
        return new Career({ career: "老板", work: ["喝茶", "开会", "审批文件"] });
        break;
    }
  }
}

let coder1 = Career.getInstance("coder");
console.log(coder1);
let boss = Career.getInstance("boss");
console.log(boss);
