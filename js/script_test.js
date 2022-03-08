// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClickedTest () {
  // this function does basic math
  document.getElementById('multiply-math-test').innerHTML = '4 x 9 = ' + (4 * 9)
  document.getElementById('divide-math-test').innerHTML = '18 / 2 = ' + (18 / 2)
  document.getElementById('exponent-math-test').innerHTML = '2 ^ 3 = ' + (2 ** 3)
	document.getElementById('square-root-math-test').innerHTML = '√(4) = ' + Math.sqrt(4)
}

