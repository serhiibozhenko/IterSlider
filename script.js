let nextSl = document.querySelector(".nextBtn");
let prevSl = document.querySelector(".previousBtn");
let slides = document.getElementsByClassName("item");

var agg = (function () {
  var index = 0,
    data = slides,
    length = data.length;
  return {
    next: function () {
      var element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index = index + 1;
      data[index].style.display = "none";
      return element;
    },
    hasNext: function () {
      data[index].style.display = "block";
      return index < length;
    },

    rewind: function () {
      index = 0;
    },

    current: function () {
      return data[index];
    },
  };
})();

prevSl.addEventListener("click", function () {
  agg.rewind();
  console.log(agg.current());
});

nextSl.addEventListener("click", function () {
  console.log(agg.next());
});
