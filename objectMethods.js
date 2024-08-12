const p = {
    firstName: "Subhajeet",
    lastName: "Mohanty",
    id: 6235,
    fullName: function() {
      return this.firstName + " " + this.lastName +", id="+this.id;
    }
  };

  console.log(p.fullName());
  console.log(p.fullName);

  console.log("=====================================================");