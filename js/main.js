$(".input-field").on("change", function () {
  let array = fibonacci($(".input-field").val());
  if (
    $(".input-field").val() === "" ||
    parseInt($(".input-field").val()) <= 2 ||
    parseInt($(".input-field").val()) === NaN ||
    $(".input-field").val() >= 1000
  ) {
    $(".fibonacci").html(
      `<h1 class='fibonacci__title'>Please input the number above \n It should be more than 2 and less than 1000</h1>`
    );
  } else {
    console.log(array);
    $(".fibonacci").html(
      `<h1 class='fibonacci__title'>Fibonacci sequence with ${$(
        ".input-field"
      ).val()} numbers</h1>`
    );
    for (let i = 0; i < array.length; i++) {
      $(".fibonacci").append(
        `<div class="fibonacci__number">${array[i]}</div>`
      );
    }
  }
  console.log(parseInt($(".input-field").val()));
});

const fibonacci = (n) => {
  let a = 1,
    b = 1,
    c = n;
  let d = [1, 1];
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    d.push(c);
  }
  return d;
};
