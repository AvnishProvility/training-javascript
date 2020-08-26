  var obj = { name: "avnish", add: "bihar", mob: 8212323223 };
  var key = ["name", "add", "mob"];

  function pick(obj, arr) {
      let newObj = {};
      arr.forEach(element => {
          newObj[element] = obj[element];
      });
      return newObj;
  }
  console.log(pick(obj, key));