import React from "react";
import "./table.css"

const SearchIngredient = (props) => {
  //   console.log("SearchIngredient", props);
  //   // variable for nutrtion
  //   const data = props.singleIngr;
  //   const totalNutrients = data.totalNutrients;
  //   const totalDaily = data.totalDaily;
  //   const calories = data.calories;
  //   const totalFat = totalNutrients.FAT.quantity;
  //   const saturatedFat = totalNutrients.FASAT.quantity;
  //   const transFat = totalNutrients.FATRN
  //     ? totalNutrients.FATRN.quantity
  //     : 0;
  //   const cholestrol = totalNutrients.CHOLE.quantity;
  //   const sodium = totalNutrients.NA.quantity;
  //   const totalCarbohydrate = totalNutrients.CHOCDF.quantity;
  //   const dietaryFiber = totalNutrients.FIBTG.quantity;
  //   const totalSugar = totalNutrients.SUGAR.quantity;
  //   const protein = totalNutrients.PROCNT.quantity;
  //   const vitaminD = totalNutrients.VITD.quantity;
  //   const calcium = totalNutrients.CA.quantity;
  //   const iron = totalNutrients.FE.quantity;
  //   const potassium = totalNutrients.K.quantity;

  //   //variable for daily value
  //   const totalFatPercen = totalDaily.FAT.quantity;
  //   const saturatedPercen = totalDaily.FASAT.quantity;
  //   const chocolestrolPercen = totalDaily.CHOLE.quantity;
  //   const sodiumPercen = totalDaily.NA.quantity;
  //   const totalCarbohydratePercen = totalDaily.CHOCDF.quantity;
  //   const dietaryFiberPercen = totalDaily.FIBTG.quantity;
  //   const proteinPercen = totalDaily.PROCNT.quantity;
  //   const VitaminDPercen = totalDaily.VITD.quantity;
  //   const calciumPercen = totalDaily.CA.quantity;
  //   const ironPercen = totalDaily.FE.quantity;
  //   const potassiumPercen = totalDaily.K.quantity;

  return (
    <>
      <section className="nutrition-facts">
        <header className="header">
          <h2 className="title">Nutrition Facts</h2>
          <h2>Item need to chnage</h2>
          <p>Serving Size 100gm</p>
        </header>

        <table className="nutrition-table">
          <thead>
            <tr>
              <th colSpan={3} className="thed">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2} className="calories">
                <b>Calories ?? kcal</b>
              </th>
            </tr>
            <tr>
              <td>% Daily Value*</td>
            </tr>
            <tr className="fat">
              <th colSpan={2}>
                <b>Total Fat</b> ??g
              </th>
              <td> ??%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th>Saturted Fat ??g</th>
              <td> ??%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th>Trans Fat ??g</th>
            </tr>
            <tr className="cholesterol">
              <th>
                <b>Cholesterol</b> ??mg
              </th>
              <td> ??%</td>
            </tr>
            <tr className="sodium">
              <th>
                <b>Sodium</b> ??mg
              </th>
              <td> ??%</td>
            </tr>
            <tr className="carbs">
              <th>
                <b>Total Carbohydrate</b> ??g
              </th>
              <td> ??%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th>Dietry Fiber ??g</th>
              <td> ??%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th>Sugars ??g</th>
            </tr>
            <tr>
              <th>
                <b>Protein</b> ??g
              </th>
            </tr>
            <tr>
              <th>Vitamin D ??µg</th>
            </tr>
            <tr>
              <th>Calcium ??mg</th>
            </tr>
            <tr>
              <th>Iron ??mg</th>
            </tr>
            <tr>
              <th>Potassium ??mg</th>
            </tr>
          </tbody>
        </table>

        <p className="info">
          * The % Daily Value (DV) tells you how much a nutrient in a serving of
          food contributes to a daily diet. 2,000 calories a day is used for
          general nutrition advice.
        </p>
      </section>
    </>
  );
};

export default SearchIngredient;
