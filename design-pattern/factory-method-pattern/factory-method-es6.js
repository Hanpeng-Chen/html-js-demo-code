class Career {
  constructor(careerName = "", work = []) {
    if (new.target === Career) {
      throw new Error("抽象类不能实例化");
    }
    this.careerName = careerName;
    this.work = work;
  }
}

class CareerFactory extends Career {
  constructor(careerName, work) {
    super(careerName, work);
  }
  create(career) {
    switch (career) {
      case "coder":
        return new CareerFactory("程序员", ["写代码", "修Bug"]);
        break;
      case "boss":
        return new CareerFactory("老板", ["喝茶", "开会", "审批文件"]);
        break;
      default:
        throw new Error("参数错误");
    }
  }
}
let careerFactory = new CareerFactory();
let coder1 = careerFactory.create("coder");
console.log(coder1);
let boss = careerFactory.create("boss");
console.log(boss);
