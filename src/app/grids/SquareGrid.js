/**
   Square Grid
*/

import Victor from 'victor';

import * as Section from '../Section';

export const create = (size, width, height) => {
  const gridPoints = points(size, width, height);
  const gridSections = sections(gridPoints, width, height);
  return {
    gridPoints,
    gridSections
  };
};

const points = (size, width, height) => {
  const ps = [];
  for (let y = 0; y <= height; y += 1) {
    for (let x = 0; x <= width; x += 1) {
      ps.push(Victor(x * size, y * size));
    }
  }
  return ps;
};

const sections = (points, width, height) => {
  const sects = [];
  const w = width + 1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      sects.push(
        Section.create([
          points[x + y * w],
          points[x + 1 + (y + 1) * w],
          points[x + (y + 1) * w]
        ])
      );
      sects.push(
        Section.create([
          points[x + y * w],
          points[x + 1 + y * w],
          points[x + 1 + (y + 1) * w],
        ])
      );
    }
  }
  return sects;
};
