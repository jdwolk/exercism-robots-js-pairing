const DIRECTIONS = {
  north: 'north',
  south: 'south',
  east: 'east',
  west: 'west',
}

class Robot {
  constructor() {
    this.bearing = null
  }

  orient(bearing) {
    this.bearing = bearing
  }
}

module.exports = Robot
