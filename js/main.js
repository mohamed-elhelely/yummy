import { callData } from "./index.js";
import { displaydata } from "./desplay.js";
$(document).ready(()=>{
  $(".looding").fadeOut(2000)
  $("body").css("overflow", "visible")
});
let data = new callData();
let response = await data.gitDtata();
response = Array.from(response);
let showData = new displaydata();
showData.displayData(response);

$("#Name").keyup(async function () {
  let name1 = $(this).val();
  console.log(name1);
  let response = await data.gitDtata(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name1}`
  );
  response = Array.from(response);
  await showData.displayData(response);
});
$("#Letter").keyup(async function () {
  let name1 = $(this).val();
  if (name1 != "" && name1 != " ") {
    console.log(name1);
    let response = await data.gitDtata(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${name1}`
    );
    response = Array.from(response);
    await showData.displayData(response);
  }
});

$("#search").click(function () {
  togel();
  data.close();
  $(".s-search").css({ display: "block" });
  showData.displayData();
});
$("#Categories").click(async function () {
  $(".s-search").css({ display: "none" });
  togel();
  data.close();
  let response = await data.gitDtata(
    `https://www.themealdb.com/api/json/v1/1/categories.php`,
    "categories"
  );
  response = Array.from(response);
  await showData.displayCategories(response);
  $(".layer1").click(async function () {
    let id = $(this).attr("id");
    let response = await data.gitDtata(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    response = Array.from(response);
    await showData.displayData(response);
  });
});
$("#Area").click(async function () {
  $(".s-search").css({ display: "none" });
  togel();
  data.close();
  let response = await data.gitDtata(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = Array.from(response);
  await showData.displayArea(response);
  $(".Area").click(async function () {
    let id = $(this).attr("id");
    let response = await data.gitDtata(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`
    );
    response = Array.from(response);
    await showData.displayData(response);
  });
});
$("#Ingredients").click(async function () {
  $(".s-search").css({ display: "none" });
  togel();
  data.close();
  let response = await data.gitDtata(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = Array.from(response);
  await showData.displayIngredients(response);
  $(".Area").click(async function () {
    let id = $(this).attr("id");
    let response = await data.gitDtata(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
    );
    response = Array.from(response);
    await showData.displayData(response);
  });
});

function togel() {
  $("#s2").css("display", "none");
  $("#s1").css("display", "block");
  $(".Contact12").css("display", "none");
}
$("#Contact").click(function () {
  console.log(10);
  $(".s-search").css({ display: "none" });
  data.close();
  $("#s2").css("display", "none");
  $("#s1").css("display", "none");
  $(".Contact12").css("display", "block");
});

function inputsValidation() {
  $("#nameInput").keyup(() => {
    if (nameValidation()) {
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("nameAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  $("#emailInput").keyup(() => {
    if (emailValidation()) {
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("emailAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  $("#phoneInput").keyup(() => {
    if (phoneValidation()) {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  $("#ageInput").keyup(() => {
    if (ageValidation()) {
      document
        .getElementById("ageAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("ageAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  $("#passwordInput").keyup(() => {
    if (passwordValidation()) {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  $("#repasswordInput").keyup(() => {
    if (repasswordValidation()) {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-none", "d-block");
    }
    if (
      nameValidation() &&
      emailValidation() &&
      phoneValidation() &&
      ageValidation() &&
      passwordValidation() &&
      repasswordValidation()
    ) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  });
}
function nameValidation() {
  return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
}
function emailValidation() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    document.getElementById("emailInput").value
  );
}
function phoneValidation() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    document.getElementById("phoneInput").value
  );
}
function ageValidation() {
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
    document.getElementById("ageInput").value
  );
}
function passwordValidation() {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
    document.getElementById("passwordInput").value
  );
}
function repasswordValidation() {
  return (
    document.getElementById("repasswordInput").value ==
    document.getElementById("passwordInput").value
  );
}
inputsValidation();
$("#closeMarke").click(() => {
  $("#s1").css("display", "block");
  $("#s2").css("display", "none");
});
