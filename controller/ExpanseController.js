import Expanse from "../models/ExpanseModel.js";

export const getExpanse = async (req, res) => {
  try {
    const response = await Expanse.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getExpanseById = async (req, res) => {
  try {
    const response = await Expanse.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createExpanse = async (req, res) => {
  try {
    await Expanse.create(req.body);
    res.status(201).json({ msg: "Expanse item Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateExpanse = async (req, res) => {
  try {
    await Expanse.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Expanse Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteExpanse = async (req, res) => {
  try {
    await Expanse.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Expanse Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
