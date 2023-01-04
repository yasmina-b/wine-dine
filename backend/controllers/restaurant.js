import Restaurant from "../models/Restaurant.js";
import Table from "../models/Table.js";

export const getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json(restaurant);
  } catch (err) {
    next(err);
  }
};
export const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};
export const createRestaurant = async (req, res, next) => {
  const newRestaurant = new Restaurant(req.body);

  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(200).json(savedRestaurant);
  } catch (err) {
    next(err);
  }
};
export const updateRestaurant = async (req, res, next) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    next(err);
  }
};
export const deleteRestaurant = async (req, res, next) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json("Restaurant has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getRestaurantTables = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    const list = await Promise.all(
      restaurant.tables.map((table) => {
        return Table.findById(table);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
