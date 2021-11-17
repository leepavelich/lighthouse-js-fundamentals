const blocksAway = function(directions) {
  const pos = {east: 0, north: 0}
  let heading = (directions[0] === 'left' ? 'north' : 'east')

  for (let i = 0; i < directions.length; i += 2) {
    switch(heading) {
      case 'north': pos.north += directions[i+1]; break
      case 'west' : pos.east  -= directions[i+1]; break
      case 'south': pos.north -= directions[i+1]; break
      case 'east' : pos.east  += directions[i+1]; break
    }

    heading = newHeading(heading, directions[i+2])
  }

  return pos
};

const newHeading = (prevHeading, direction) => {
  switch(prevHeading) {
    case 'north': return (direction === 'left') ? 'west'  : 'east'
    case 'west':  return (direction === 'left') ? 'south' : 'north'
    case 'south': return (direction === 'left') ? 'east'  : 'west'
    case 'east':  return (direction === 'left') ? 'north' : 'south'
  }
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));