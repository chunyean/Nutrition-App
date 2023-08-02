import React, { useState } from "react";
import "./table.css";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const PersonalSearchResult = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          nutrition={props.nutrition}
          title={props.title}
          setShowModal={props.setShowModal}
          photo={props.photo}
        ></Overlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

const Overlay = (props) => {
  const data = props.nutrition;
  const totalNutrients = data.totalNutrients;
  const totalDaily = data.totalDaily;

  // variable for nutrtion
  const calories = data.calories.toFixed() || 0;
  const totalFat = totalNutrients.FAT.quantity.toFixed() || 0;
  const saturatedFat = totalNutrients.FASAT
    ? totalNutrients.FASAT.quantity.toFixed()
    : 0;
  const transFat = totalNutrients.FATRN
    ? totalNutrients.FATRN.quantity.toFixed()
    : 0;
  const cholestrol = totalNutrients.CHOLE.quantity.toFixed() || 0;
  const sodium = totalNutrients.NA.quantity.toFixed() || 0;
  const totalCarbohydrate = totalNutrients.CHOCDF.quantity.toFixed() || 0;
  const dietaryFiber = totalNutrients.FIBTG.quantity.toFixed() || 0;
  const totalSugar = totalNutrients.SUGAR.quantity.toFixed() || 0;
  const protein = totalNutrients.PROCNT.quantity.toFixed() || 0;
  const vitaminD = totalNutrients.VITD.quantity.toFixed() || 0;
  const calcium = totalNutrients.CA.quantity.toFixed() || 0;
  const iron = totalNutrients.FE.quantity.toFixed() || 0;
  const potassium = totalNutrients.K.quantity.toFixed() || 0;

  //variable for daily value
  const totalFatPercen = totalDaily.FAT.quantity.toFixed() || 0;
  const saturatedPercen = totalDaily.FASAT.quantity.toFixed() || 0;
  const chocolestrolPercen = totalDaily.CHOLE.quantity.toFixed() || 0;
  const sodiumPercen = totalDaily.NA.quantity.toFixed() || 0;
  const totalCarbohydratePercen = totalDaily.CHOCDF.quantity.toFixed() || 0;
  const dietaryFiberPercen = totalDaily.FIBTG.quantity.toFixed() || 0;
  const proteinPercen = totalDaily.PROCNT.quantity.toFixed() || 0;
  const VitaminDPercen = totalDaily.VITD.quantity.toFixed() || 0;
  const calciumPercen = totalDaily.CA.quantity.toFixed() || 0;
  const ironPercen = totalDaily.FE.quantity.toFixed() || 0;
  const potassiumPercen = totalDaily.K.quantity.toFixed() || 0;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button
          type="button"
          class="btn-close"
          id="button"
          onClick={() => props.setShowModal(false)}
        ></button>
        <h5 className={styles.h5}>Searching Result</h5>
        <img src={props.photo} className={styles.image}></img>
        <section className="nutrition-facts">
          <header className="header">
            <h2 className="title">Nutrition Facts</h2>
            <h2 className="ingredient">{props.title}</h2>
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
            * The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2,000 calories a day is used
            for general nutrition advice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PersonalSearchResult;
