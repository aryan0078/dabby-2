
class Base {
  constructor(client, store, file, options = {}) {
    this.client = client;
    this.store = store;
    this.file = file;
    this.name = options.name || file.name;
    this.enabled = typeof options.enabled !== "undefined" ? options.enabled : true;
     this.usersMap = new Map();
     this.LIMIT = 3;
     this.DIFF = 2000;
     this.TIME = 10000;
  }

  reload() {
    return this.store.load(this.file.path);
  }
  
  enable() {
    this.enabled = true;
    return this;
  }

  disable() {
    this.enabled = false;
    return this;
  }
}

module.exports = Base;
