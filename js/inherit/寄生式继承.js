let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
      return this.friends;
    };
    return clone;
  }

  let person5 = clone(parent5);
  person5.friends.push('p4') 
  let person6 = clone(parent5);

  console.log(person5.getFriends());
  console.log(person6.getFriends());