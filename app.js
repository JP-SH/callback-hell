const btn = document.querySelector('button');

// This function moves an element "amount" number of pixels after a delay.
// If the element will stay on screen, we move the element and call the onSuccess callback function
// If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };


// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );


// same code as above refactored
const moveX = (element, amount, delay) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({bodyBoundary, elRight, amount})
      }
      else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  })
};


// moveX(btn, 300, 1000).then(() => {
//   return moveX(btn, 300, 1000);
// })
// .then(() => {
//   return moveX(btn, 300, 1000);
// })
// .then(() => {
//   return moveX(btn, 300, 1000);
// })
// .then(() => {
//   return moveX(btn, 300, 1000);
// })
// .catch(() => {
//   console.log('YOU HAVE RUN OUT OF SCREEN REAL ESTATE');
// })

// since we are using arrow functions and returning one line we dont have to use the word return but can use implicit returns and put it all on one line
moveX(btn, 300, 1000)
.then(() => moveX(btn, 300, 1000))
.then(() => moveX(btn, 300, 1000))
.then(() => moveX(btn, 300, 1000))
.then(() => moveX(btn, 300, 1000))
.then(() => moveX(btn, 300, 1000))
.catch(({bodyBoundary, elRight, amount}) => {
  console.log(`Body is ${bodyBoundary}px wide`);
  console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
});
