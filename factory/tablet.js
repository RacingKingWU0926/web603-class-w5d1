const Tablet = function({ ram, hdd, name, network }) {
  this.ram = ram || 0;
  this.hdd = hdd || 0;
  this.name = name || "";
  this.network = network || "";
}

module.exports = Tablet;
