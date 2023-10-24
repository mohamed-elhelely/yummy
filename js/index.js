export class callData {
  constructor() {
    this.close();
    $("#open").click(function () {
      $("#close").css({ display: "block" });
      $("#open").css({ display: "none" });
      $(".side-list").animate({ left: "0" }, 500);
      $(".side-div").animate({ left: "14.5vw" }, 500);
      $("#contentNav").animate({ top: "0" }, 700);
    });
    $("#close").click(function () {
      $("#close").css({ display: "none" });
      $("#open").css({ display: "block" });
      $(".side-list").animate({ left: "-15%" }, 500);
      $(".side-div").animate({ left: "0" }, 500);
      $("#contentNav").animate({ top: "110%" }, 700);
    });
  }
  close() {
    $("#close").css({ display: "none" });
    $("#open").css({ display: "block" });
    $(".side-list").animate({ left: "-15%" }, 500);
    $(".side-div").animate({ left: "0" }, 500);
    $("#contentNav").animate({ top: "110%" }, 700);
  }
  async gitDtata(
    link = `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
    type = "meals"
  ) {
    let api = await fetch(link);
    let respons = await api.json();
    if (type == "meals") {
      let result = respons.meals;
      return result;
    }
    if (type == "categories") {
      let result = respons.categories;
      return result;
    }
  }
}
