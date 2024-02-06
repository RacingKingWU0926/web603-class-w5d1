const Laptop = require("./laptop");
const Tablet = require("./tablet");

const gadget = { Laptop, Tablet };

// add module.export here
module.exports = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];
    if (GadgetType) {
      return new GadgetType(attributes);
    }
    console.log(`Gadget type not found! Getting '${type}'.`);
  }
}
