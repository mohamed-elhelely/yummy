export class displaydata {
  // constructor(){

  // }
  displayData(result) {
    let temp = "";
    if (result == null) {
      console.log();
      $("#showData").html(temp);
    } else {
      for (let i = 0; i < result.length; i++) {
        var id = result[i].idMeal;
        var url = result[i].strMealThumb;
        var p = result[i].strMeal;
        temp += `<div class="col-lg-3 col-md-4 col-sm-6">
    <div
      class="position-relative item1  rounded-4 overflow-hidden"
    >
      <img id="img1" src="${url}" class="w-100" alt="" />
      <div class="layer1 d-flex align-items-center" id="${id}">
        <h2 class="text-black" id="h1">${p}</h2>
        <p class="text-black" id=""></p>
      </div>
    </div>
  </div>`;
        $("#showData").html(temp);
        $(".layer1").click(async (e) => {
          $("#s1").css("display", "none");
          $("#s2").css("display", "block");
          id = e.target.id;
          async function gitDtata(id) {
            let api = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            let respons = await api.json();
            let result = respons.meals;
            return result;
          }
          let x = await gitDtata(id);
          let my = x[0];
          Instructions(my);
          async function Instructions(my) {
            $("#Instructions").html(my.strInstructions);
            $("#image").html(my.strMealThumb);
            $("#nameDish").html(my.strMeal);
            $("#src1").attr("href", my.strSource);
            $("#src2").attr("href", my.strYoutube);
            $("#image").attr("src", my.strMealThumb);
            $("#nameDish").html(my.strMeal);
            $("#area32").html("Area : " + my.strArea);
            $("#Category32").html("Category : " + my.strCategory);
            const items = [];
            let temp = "";
            let temp2 = "";
            if (my.strTags != "" && my.strTags != null) {
                temp2 += `<li class="alert alert-danger m-2 p-1">${my.strTags}</li>`;         
            $("#tags").html(temp2);
            }
            for (let i = 1; i <= 20; i += 1) {
              const strIngredient = my[`strIngredient${i}`];
              const strMeasure = my[`strMeasure${i}`];
              items.push({
                ingredient: strIngredient,
                measure: strMeasure,
              });
              if (strIngredient != "") {
                temp += `<li class="alert alert-info m-2 p-1">${strMeasure} ${strIngredient}</li>`;
                $("#Recipes").html(temp);
              }
            }
          }
        });
      }
    }
  }
  displayCategories(result) {
    let temp = "";
    for (let i = 0; i < result.length; i++) {
      let url = result[i].strCategoryThumb;
      let p = result[i].strCategory;
      let info = result[i].strCategoryDescription.slice(0, 100);
      temp += `<div class="col-lg-3 col-md-4 col-sm-6" >
    <div
      class="position-relative item1  rounded-4 overflow-hidden"
    >
      <img id="img1" src="${url}" class="w-100" alt="" />
      <div class="layer1 d-flex  align-items-center" id="${p}">
        <div class=" text-center">
            <h2 class="text-black" id="h1">${p}</h2>
            <p class="text-black" id="p1">${info}</p></div>
      </div>
    </div>
  </div>`;
      $("#showData").html(temp);
    }
  }
  displayArea(result) {
    let temp = "";
    for (let i = 0; i < result.length; i++) {
      let Area = result[i].strArea;
      let id = result[i].strArea;
      temp += `<div class="col-md-3">
      <div class=" text-white text-center Area" id="${id}">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h3>${Area}</h3>
      </div>
    </div>`;
      $("#showData").html(temp);
    }
  }
  displayIngredients(result) {
    let temp = "";
    for (let i = 0; i < 20; i++) {
      let Ingredients = result[i].strIngredient;
      let info = result[i].strDescription.slice(0, 90);
      temp += `<div class="col-md-3">
      <div class=" text-white text-center Area" id="${Ingredients}">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${Ingredients}</h3>
        <p>${info}</p>
      </div>
    </div>`;
      $("#showData").html(temp);
    }
  }
}
