/**
 * Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. 
 * You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, 
but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
 */

/**
 * PSEUDO CODED SOLUTION
 * @param {array} dice of integers representing die rolls
 */
const pseudoGreed = (dice) => {
    /**
     * Declare a variable ‘possiblePoints’ and assign it to an object containing 
     *  property/value pairs that correspond to the given scoring system.
     */
  
    /**
     * Declare a variable `total` and assign it to 0 as that is the lowest possible score.
     */
    
    /**
     * Reduce input data to get a cache of single die values.
     */
      // update a cache of die numbers
      /**
       * If a triplet is found, increment total using 
       *  scoring system, and reset die count.
       */
  
    /**
     * Loop through remaining singles and increment total with 
     *  any applicable singles points from scoring system.
     */
  
    // return total
  };
  
  const greed = (dice) => {
    /**
     * Declare a variable ‘possiblePoints’ and assign it to an object containing 
     *  property/value pairs that correspond to the given scoring system.
     */
    const possiblePoints = {
      111: 1000,
      666: 600,
      555: 500,
      444: 400,
      333: 300,
      222: 200,
      1: 100,
      5: 50
    };
  
    /**
     * Declare a variable `total` and assign it to 0 as that is the lowest possible score.
     */
    let total = 0;
    
    /**
     * Reduce input data to get a cache of single die values.
     */
    const singlesCount = dice.reduce((singlesCache, die) => {
      // update a cache of die numbers
      if (!singlesCache[die]) singlesCache[die] = 0; 
      singlesCache[die]++;
      /**
       * If a triplet is found, increment total using 
       *  scoring system, and reset die count.
       */
      if (singlesCache[die] === 3) {
        total += possiblePoints[`${die}${die}${die}`]; // '111' -> possiblePoints['111'] -> 1000
        delete singlesCache[die];
      }
      return singlesCache;
    }, {});
  
  
    /**
     * Loop through remaining singles and increment total with 
     *  any applicable singles points from scoring system.
     */
    Object.keys(singlesCount).forEach((die) => {
      if (possiblePoints[die]) {
        for (let i = 0; i < singlesCount[die]; i++) {
          total += possiblePoints[die];
        }
      }
    });
  
    // return total
    return total;
  };
  
  /**
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   *
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   *
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * STEP 7: TEST YOUR CODE!
   * It’s important to test each aspect as you’re building. Don’t wait until you’re finished.
   */
  
  console.log('TESTING GREED');
  // example with 1/5 triplet and additional single
  console.log('[1, 1, 1, 3, 1]: expect -> 1100: actual -> ', greed([1, 1, 1, 3, 1]));
  // example with non 1/5 triplet and single
  console.log('[2, 4, 4, 5, 4]: expect -> 450: actual -> ', greed([2, 4, 4, 5, 4]));
  // example with non 1/5 triplet only
  console.log('[2, 4, 4, 6, 4]: expect -> 400: actual -> ', greed([2, 4, 4, 6, 4]));
  // example with singles only
  console.log('[5, 1, 3, 4, 1]: expect -> 250: actual -> ', greed([5, 1, 3, 4, 1]));
  // example of bad throw
  console.log('[6, 6, 4, 4, 3]: expect -> 0: actual -> ', greed([6, 6, 4, 4, 3]));
  
  /**
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * STEP 8: REFACTOR
   * Refactor ASAP once finished! Don’t say “i’ll come back later.”
   * 
   * What are some ways we could refactor our code?
   *  - it's always better to avoid nested looping when possible
   */
  
  const refactoredGreed = (dice) => {
    /**
     * Declare a variable ‘points’ and assign it to an object containing 
     *  property/value pairs that correspond to the given scoring system.
     */
    const possiblePoints = {
      111: 1000,
      666: 600,
      555: 500,
      444: 400,
      333: 300,
      222: 200,
      1: 100,
      5: 50
    };
  
    /**
     * Declare a variable `total` and assign it to 0 as that is the lowest possible score.
     */
    let total = 0;
    
    /**
     * Reduce input data to get a cache of single die values.
     */
    const singlesCount = dice.reduce((singlesCache, die) => {
      // update a cache of die numbers
      if (!singlesCache[die]) {
        singlesCache[die] = 0;
      }
      singlesCache[die]++;
      /**
       * If a triplet is found, increment total using 
       *  scoring system, and reset die count.
       */
      if (singlesCache[die] === 3) {
        total += possiblePoints[`${die}${die}${die}`]; // '111' -> possiblePoints['111'] -> 1000
        delete singlesCache[die];
      }
      return singlesCache;
    }, {});
  
  
    /**
     * Loop through remaining singles and increment total with 
     *  any applicable singles points from scoring system.
     */
    Object.keys(singlesCount).forEach((die) => {
      if (possiblePoints[die]) total += possiblePoints[die] * singlesCount[die];
    });
  
    // return total
    return total;
  };
  
  /**
   * 
   * 
   * STEP 8.5: TEST AGAIN
   * Verify your refactored code is still working as expected!!
   */
  
  // console.log('TESTING REFACTOREDGREED');
  // // example with 1/5 triplet and additional single
  // console.log('[1, 1, 1, 3, 1]: expect -> 1100: actual -> ', refactoredGreed([1, 1, 1, 3, 1]));
  // // example with non 1/5 triplet and single
  // console.log('[2, 4, 4, 5, 4]: expect -> 450: actual -> ', refactoredGreed([2, 4, 4, 5, 4]));
  // // example with non 1/5 triplet only
  // console.log('[2, 4, 4, 6, 4]: expect -> 400: actual -> ', refactoredGreed([2, 4, 4, 6, 4]));
  // // example with singles only
  // console.log('[5, 1, 3, 4, 1]: expect -> 250: actual -> ', refactoredGreed([5, 1, 3, 4, 1]));
  // // example of bad throw
  // console.log('[6, 6, 4, 4, 3]: expect -> 0: actual -> ', refactoredGreed([6, 6, 4, 4, 3]));