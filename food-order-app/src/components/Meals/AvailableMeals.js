import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
//import { useEffect, useState } from "react";
import useAxios from "../../hooks/use-axios";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const {
		error: httpError,
		loading: isLoading,
		sendRequest: getMeals,
	} = useAxios();

	useEffect(() => {
		const formatMeals = (resMeals) => {
			const mealsArr = [];
			for (const key in resMeals) {
				mealsArr.push({
					id: key,
					name: resMeals[key].name,
					description: resMeals[key].description,
					price: resMeals[key].price,
				});
			}

			setMeals(mealsArr);
		};

		getMeals(
			{
				method: "GET",
				url: "https://food-order-441e3-default-rtdb.firebaseio.com/meals.json",
			},
			formatMeals
		);
	}, [getMeals]);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}
	const mealsList = meals.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
