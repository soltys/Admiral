/* eslint-disable no-magic-numbers */
/* eslint-disable prefer-destructuring */
/* global describe, it */

import { expect } from "chai";
import Board from "../../../ClientCode/GameEngine/board.js";

describe("CELL requirements", () => {
  it("GIVEN that a Board is initialized " +
    "THEN it should be possible to determine neighbour-cells.", () => {
      const board = new Board(),
            cellTopLeft = board.cells[0][0],
            cellBottomRight = board.cells[17][11],
            cellBottomLeft = board.cells[17][0],
            cellTopRigth = board.cells[0][11],
            cellMiddle = board.cells[9][5];

      expect(cellTopLeft.getCellNeighbours(board).length).to.be.equal(2);
      expect(cellBottomRight.getCellNeighbours(board).length).to.be.equal(2);
      expect(cellBottomLeft.getCellNeighbours(board).length).to.be.equal(2);
      expect(cellTopRigth.getCellNeighbours(board).length).to.be.equal(2);
      expect(cellMiddle.getCellNeighbours(board).length).to.be.equal(4);
    });
});