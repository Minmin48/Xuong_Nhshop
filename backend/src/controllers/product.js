import Product from "../models/product";

export const getProduct = async (req, res) => {
  try {
    const data = await Product.find({});
    if (data.length < 0) {
      return res.status(404).json({ message: "Không có sản phẩm nào" });
    }
    return res.status(201).json({
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    if (data.length < 0) {
      return res.status(404).json({ message: "Không có sản phẩm nào" });
    }
    return res.status(201).json({
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    return res.status(201).json({
      messages: "Tạo sản phẩm thành công",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (data.length < 0) {
      return res.status(404).json({ message: "Không có sản phẩm nào" });
    }
    return res.status(201).json({ messages: "Xóa sản phẩm thành công", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (data.length < 0) {
      return res.status(404).json({ message: "No product found" });
    }
    return res.status(201).json({
      messages: "Cập nhật sản phẩm thành công",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const relatedProduct = async (req, res) => {
  try {
    const product = await Product.find({ categories: req.params.categoryId });
    return res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
