// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CuboidMaker1 {
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    } 
  volume = function() {
    return this.length * this.width * this.height;
    }
  surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

  const cuboid1 = new CuboidMaker1 ({
    length: 4,
    width: 5,
    height: 5,
  });

  class CubeMaker extends CuboidMaker1 {
    constructor(attrs) {
      super(attrs);
    }
    cubeVolume(subject) {
      return `Today we are learning about ${subject}`;
    }
    cubeSurfaceArea(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`;
    }
  };
  
  const cube1 = new CubeMaker ({
    length: ,
    width: ,
    height: ,
  });


console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

