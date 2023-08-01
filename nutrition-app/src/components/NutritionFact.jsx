import React from "react";

const NutritionFact = (props) => {
  const data = props.nutrition;
  const totalNutrients = data.totalNutrients;
  const totalDaily = data.totalDaily;

  const foodName = () => {
    return props.ingredient || props.title;
  };

  // variable for nutrtion
  const calories = data.calories.toFixed();
  const totalFat = totalNutrients.FAT.quantity.toFixed();
  const saturatedFat = totalNutrients.FASAT
    ? totalNutrients.FASAT.quantity.toFixed()
    : 0;
  const transFat = totalNutrients.FATRN
    ? totalNutrients.FATRN.quantity.toFixed()
    : 0;
  const cholestrol = totalNutrients.CHOLE.quantity.toFixed();
  const sodium = totalNutrients.NA.quantity.toFixed();
  const totalCarbohydrate = totalNutrients.CHOCDF.quantity.toFixed();
  const dietaryFiber = totalNutrients.FIBTG.quantity.toFixed();
  const totalSugar = totalNutrients.SUGAR.quantity.toFixed();
  const protein = totalNutrients.PROCNT.quantity.toFixed();
  const vitaminD = totalNutrients.VITD.quantity.toFixed();
  const calcium = totalNutrients.CA.quantity.toFixed();
  const iron = totalNutrients.FE.quantity.toFixed();
  const potassium = totalNutrients.K.quantity.toFixed();

  //variable for daily value
  const totalFatPercen = totalDaily.FAT.quantity.toFixed();
  const saturatedPercen = totalDaily.FASAT.quantity.toFixed();
  const chocolestrolPercen = totalDaily.CHOLE.quantity.toFixed();
  const sodiumPercen = totalDaily.NA.quantity.toFixed();
  const totalCarbohydratePercen = totalDaily.CHOCDF.quantity.toFixed();
  const dietaryFiberPercen = totalDaily.FIBTG.quantity.toFixed();
  const proteinPercen = totalDaily.PROCNT.quantity.toFixed();
  const VitaminDPercen = totalDaily.VITD.quantity.toFixed();
  const calciumPercen = totalDaily.CA.quantity.toFixed();
  const ironPercen = totalDaily.FE.quantity.toFixed();
  const potassiumPercen = totalDaily.K.quantity.toFixed();

  console.log(props.image);

  const photo = () => {
    return (
      props.image.parsed[0].food.image ||
      props.image.hints[0].food.image ||
      props.image.hints[1].food.image ||
      props.image.hints[2].food.image ||
      props.image.hints[3].food.image ||
      props.image.hints[4].food.image
    );
  };

  return (
    <>
      <img src={photo()} className="image"></img>
      <section className="nutrition-facts">
        <header className="header">
          <h2 className="title">Nutrition Facts</h2>
          <h2 className="ingredient">{foodName()}</h2>
          <p className="serving-size">
            Serving Size {data.totalWeight}
            gm
          </p>
        </header>

        <table className="nutrition-table">
          <thead>
            <tr>
              <th colSpan={3} className="thead">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="calories">
              <th colSpan={2}>
                <b>Calories {calories}kcal</b>
              </th>
            </tr>
            <tr className="line">
              <td colSpan={4} className="td">
                % Daily Value*
              </td>
            </tr>
            <tr className="line">
              <th colSpan={3}>
                <b>Total Fat</b> {totalFat}g
              </th>
              <td className="tdline"> {totalFatPercen}%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th className="line" colSpan={2}>
                Saturated Fat {saturatedFat}g
              </th>
              <td className="tdline"> {saturatedPercen}%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th className="line" colSpan={3}>
                Trans Fat {transFat}g
              </th>
            </tr>
            <tr className="line">
              <th colSpan={3}>
                <b>Cholesterol</b> {cholestrol}mg
              </th>
              <td className="tdline"> {chocolestrolPercen}%</td>
            </tr>
            <tr className="line">
              <th colSpan={3}>
                <b>Sodium</b> {sodium}mg
              </th>
              <td className="tdline"> {sodiumPercen}%</td>
            </tr>
            <tr className="line">
              <th colSpan={3}>
                <b>Total Carbohydrate</b> {totalCarbohydrate}g
              </th>
              <td className="tdline"> {totalCarbohydratePercen}%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th colSpan={2} className="line">
                Dietry Fiber {dietaryFiber}g
              </th>
              <td className="tdline"> {dietaryFiberPercen}%</td>
            </tr>
            <tr>
              <td className="space-cell"></td>
              <th className="line" colSpan={3}>
                Sugars {totalSugar}g
              </th>
            </tr>
            <tr className="last">
              <th colSpan={3}>
                <b>Protein</b> {protein}g
              </th>
              <td className="tdline">{proteinPercen}%</td>
            </tr>
            <tr className="line">
              <th colSpan={3}>Vitamin D {vitaminD}µg</th>
              <td className="tdline">{VitaminDPercen}%</td>
            </tr>
            <tr className="line">
              <th colSpan={3}>Calcium {calcium}mg</th>
              <td className="tdline">{calciumPercen}%</td>
            </tr>
            <tr className="line">
              <th colSpan={3}>Iron {iron}mg</th>
              <td className="tdline">{ironPercen}%</td>
            </tr>
            <tr className="line">
              <th colSpan={3}>Potassium {potassium}mg</th>
              <td className="tdline">{potassiumPercen}%</td>
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

export default NutritionFact;
